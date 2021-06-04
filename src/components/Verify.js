import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import { storage } from '../firebase';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

function Verify() {
  const [image, setImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  let src;
  const history = useHistory();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const gotoHome = () => {
    history.push('/');
  };

  const onImageChange = (e) => {
    // const reader = new FileReader();
    // let file = ref;
    // if (file) {
    //   reader.onload = () => {
    //     if (reader.readyState === 2) {
    //       console.log(file);
    //       setImage(file);
    //       src = file.name;
    //     }
    //   };
    //   reader.readAsDataURL(e.target.files[0]);
    //   // if there is no file, set image back to null
    // } else {
    //   setImage(null);
    // }

    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  const uploadToFirebase = () => {
    //1.
    if (selectedFile) {
      //2.
      const storageRef = storage.ref();
      //3.
      const imageRef = storageRef.child(selectedFile.name);
      //4.
      imageRef
        .put(selectedFile)
        //5.
        .then(() => {
          alert('Image uploaded successfully to Firebase.');
        });
    } else {
      alert('Please upload an image first.');
    }
  };

  return (
    <Container>
      <Content>
        <UploadImageContainer>
          <Input
            type='file'
            accept='image/x-png,image/jpeg'
            name='user[image]'
            onChange={(e) => {
              onImageChange(e);
            }}
            className='custom-file-input'
          />
          {selectedFile && <UploadImage src={preview} />}
        </UploadImageContainer>
        <ReceivedImageContainer>
          <ReceivingMessage>Message : Verified Medicine</ReceivingMessage>
        </ReceivedImageContainer>
      </Content>
      <Button>
        <button onClick={uploadToFirebase}>Upload Image</button>
        <button onClick={gotoHome}>Go Back</button>
      </Button>
    </Container>
  );
}

export default Verify;

const Container = styled.div`
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  min-height: 20rem;

  margin-bottom: 2rem;
  display: flex;
  width: 90%;
`;

const Input = styled.input`
  &.custom-file-input {
    // width: 50rem;
    &::-webkit-file-upload-button {
      visibility: hidden;
      display: none;
    }
    &::before {
      content: 'Select Image';
      display: inline-block;
      background: var(--color-blueberry);
      border: 1px solid #999;
      border-radius: 3px;
      padding: 5px 8px;
      outline: none;
      white-space: nowrap;
      -webkit-user-select: none;
      cursor: pointer;
      // text-shadow: 1px 1px #fff;
      font-weight: 700;
      font-size: 15px;
      margin-right: 1rem;
      color: var(--color-apple-core);
    }
    &:hover::before {
      border-color: black;
    }
    &:active::before {
      background: var(--color-apple-core);
    }
  }
`;

const Button = styled.div`
  button {
    background: var(--color-blueberry);
    border: none;
    outline: none;
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--color-citrus);
    padding: 1rem 2rem;
    letter-spacing: 1.3px;
    border-radius: 6px;
    transition: all 250ms;
    margin-right: 2rem;
    cursor: pointer;

    &:hover {
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(-1px);
    }
  }
`;

const UploadImage = styled.img`
  margin-top: 2rem;
  width: 30rem;
`;

const UploadImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 50%;
`;

const ReceivedImageContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReceivingMessage = styled.h2`
  width: 100%;
  text-align: center;
  padding: 0.5rem 0;
  color: var(--color-blueberry);
`;
