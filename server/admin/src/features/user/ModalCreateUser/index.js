import React, { useState } from 'react';
import './style.scss';
import { FilePond, registerPlugin, setOptions } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginImageResize
);

const ModalCreateUser = () => {
  const [data, setData] = useState({
    role: '',
    image: '',
  });
  const [files, setFiles] = useState([]);
  console.log(files);
  return (
    <div className='modal-create-user'>
      <div className='input-infor'>
        <label htmlFor='username' className='label'>
          Username
        </label>
        <input type='text' name='username' className='input username' />
        <label htmlFor='email' className='label'>
          Email
        </label>
        <input type='email' name='email' className='input email' />
        <label htmlFor='password' className='label'>
          Password
        </label>
        <input type='password' name='password' className='input password' />
        <label htmlFor='confirmPassword' className='label'>
          Confirm Password
        </label>
        <input
          type='password'
          name='confirmPassword'
          className='input confirmPassword'
        />
      </div>
      <div className='input-role-img'>
        <div className='upload-file'>
          <FilePond
            files={files}
            onupdatefiles={(image) => {
              setData({
                ...data,
                image,
              });
            }}
            allowMultiple={false}
            acceptedFileTypes='image/jpeg,image/png'
            name='files'
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
          />
        </div>
        <div className='role'>
          <div className='dropdown-role '>
            <p>{data.role ? data.role : `Role`}</p>
            <i className='fa fa-angle-down' aria-hidden='true'></i>
          </div>
          <ul className='list-dropdown'>
            <li
              className='item-dropdown'
              onClick={() => setData({ ...data, role: 'Customer' })}
            >
              Customer
            </li>
            <li
              className='item-dropdown'
              onClick={() => setData({ ...data, role: 'Admin' })}
            >
              Admin
            </li>
            <li
              className='item-dropdown'
              onClick={() => setData({ ...data, role: 'SuperAdmin' })}
            >
              SuperAdmin
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ModalCreateUser;
/*




*/
