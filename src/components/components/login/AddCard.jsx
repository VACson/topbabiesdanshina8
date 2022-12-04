import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import Cropper from 'react-easy-crop';
import getCroppedImg from './cropImage';
import { getOrientation } from 'get-orientation/browser';

import { useAddBabyMutation } from '../../../store/babiesAPI';

function AddCard() {
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [isModalOpen, setModalisOpen] = useState(false);

  const [addBaby, addBabyResult] = useAddBabyMutation();

  const ORIENTATION_TO_ANGLE = {
    3: 180,
    6: 90,
    8: -90,
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);
  const interractModal = () => {
    setModalisOpen(!isModalOpen);
  };
  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
      // console.log('donee', { croppedImage });
      setCroppedImage(croppedImage);
    } catch (e) {
      console.error(e);
      interractModal();
    }
    setModalisOpen(!isModalOpen);
  }, [imageSrc, croppedAreaPixels]);

  const onClose = useCallback(() => {
    setImageSrc(null);
  }, []);

  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await readFile(file);

      // apply rotation if needed
      const orientation = await getOrientation(file);
      const rotation = ORIENTATION_TO_ANGLE[orientation];
      if (rotation) {
        imageDataUrl = await getRotatedImage(imageDataUrl, rotation);
      }
      setImageSrc(imageDataUrl);
      setModalisOpen(!isModalOpen);
    }
  };

  //     'image/png': ['.png'],
  //     'image/jpeg': ['.jpeg'],
  //     'image/jpg': ['.jpg'],
  //     'image/webp': ['.webp'],
  //     'image/heif': ['.heif'],
  const [description, setDescription] = React.useState('');

  const addCard = () => {
    addBaby({
      image: 'img',
      name: 'name',
      description: 'description',
    }).then(() => {
      console.log(addBabyResult);
    });
    // navigate('/battle');
  };

  return (
    <div className="addcardpage font-inter">
      <div className="container">
        <section className="dropzone">
          <div className="dropzone__photo">
            <img className="dropzone__photo__item" src={croppedImage} alt="" />
          </div>
          <div className="dropzone__description">{description}</div>
          <div className="dropzone__place">#1</div>
          <div className="dropzone__rating">9999</div>
        </section>
      </div>
      <div className="container">
        <label className="addcardpage__input">
          <p>Виберіть фото</p>
          <input
            className="addcardpage__input__field"
            type="file"
            onChange={onFileChange}
            accept="image/*"
          />
        </label>
        <input type="text" className="addcardpage__input" placeholder="Додайте ім'я" />
        <textarea
          maxLength={128}
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="addcardpage__input addcardpage__input--description"
          placeholder="Додайте опис"
        />
        <button onClick={() => addCard()} className="addcardpage__button">
          Додати бейбу
        </button>
      </div>
      {isModalOpen ? (
        <>
          <div className="cropContainer__modal" onClick={() => interractModal()}></div>
          <div className="cropContainer">
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
            <div className="cropContainer__controls">
              <input
                type="range"
                value={zoom}
                min="1"
                max="3"
                step="0.1"
                aria-labelledby="Zoom"
                onChange={(e) => {
                  setZoom(e.target.value);
                }}
                className="zoom"
              />
              <button
                className="addcardpage__button addcardpage__button__crop"
                onClick={() => showCroppedImage()}>
                Crop
              </button>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
}

export default AddCard;
