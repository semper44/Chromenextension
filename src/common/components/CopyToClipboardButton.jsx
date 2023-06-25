/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useNavigate } from 'react-router-dom';

const CopyToClipboardButton = ({ text, value }) => {
  const navigate=useNavigate()

  return (
    <CopyToClipboard text={text}>
      <button onClick={()=>navigate("/seedphrasevalidation")}>{value}</button>
    </CopyToClipboard>
  );
};


export default CopyToClipboardButton;
