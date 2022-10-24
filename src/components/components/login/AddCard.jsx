import React from 'react';
import { useDropzone } from 'react-dropzone';
import { useNavigate } from 'react-router-dom';

function AddCard() {
  const navigate = useNavigate();
  const [files, setFiles] = React.useState([]);
  const {
    // acceptedFiles,
    getRootProps,
    getInputProps,
  } = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpeg'],
      'image/jpg': ['.jpg'],
      'image/webp': ['.webp'],
      'image/heif': ['.heif'],
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    },
  });
  const thumbs = files.map((file) => (
    <div key={file.name} className="dropzone__photo__container">
      <img
        className="dropzone__photo__item"
        src={file.preview}
        onLoad={() => {
          URL.revokeObjectURL(file.preview);
        }}
        alt="preview"
      />
    </div>
  ));
  const [description, setDescription] = React.useState('');

  React.useEffect(
    () => {
      return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
    }, // eslint-disable-next-line
    [],
  );

  const addCard = () => {
    navigate('/battle');
  };

  return (
    <div className="addcardpage font-inter">
      <div className="container">
        <section className="dropzone">
          <div className="dropzone__photo">{thumbs}</div>
          <span className="dropzone__description">{description}</span>
          <div className="dropzone__place">#1</div>
          <div className="dropzone__rating">9999</div>
        </section>
      </div>
      <div className="container">
        <div {...getRootProps({ className: `addcardpage__input` })}>
          <input {...getInputProps()} />
          <p>Виберіть або перетягіть фото в цю область</p>
        </div>
        <input type="text" className="addcardpage__input" placeholder="Додайте ім'я" />
        <textarea
          maxLength={228}
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
    </div>
  );
}

export default AddCard;
