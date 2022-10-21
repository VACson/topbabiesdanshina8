import React from 'react';
import { useDropzone } from 'react-dropzone';
import { useNavigate } from 'react-router-dom';

function AddCard() {
  const navigate = useNavigate();
  const [files, setFiles] = React.useState([]);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
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
    <div key={file.name}>
      <div>
        <img
          className="preview"
          src={file.preview}
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
          alt="preview"
        />
      </div>
    </div>
  ));

  React.useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  const addCard = () => {
    return navigate('/battle');
  };

  return (
    <div className="addcardpage">
      <div className="container">
        <section className="dropzone">
          <div>{thumbs}</div>
        </section>
      </div>
      <div className="container">
        {/* <div>add description</div> */}
        <div {...getRootProps({ className: `dropzone__field` })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
        <button onClick={() => addCard()} className="button">
          Додати бейбу
        </button>
      </div>
    </div>
  );
}

export default AddCard;
