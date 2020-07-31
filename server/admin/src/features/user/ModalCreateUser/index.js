import React, { useState, Fragment } from 'react';
import './style.scss';
import { FilePond, registerPlugin, setOptions } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { UI } from '../../../components/elements';
import { useDispatch } from 'react-redux';
import { handleUserCreate } from '../../../redux/actions/user';
import Notification from '../../../components/elements/Notification';

registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginImageResize
);

const ModalCreateUser = () => {
  const initData = {
    role: '',
    avatar: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const dispatch = useDispatch();
  const [data, setData] = useState(initData);
  console.log(data);
  const [files, setFiles] = useState([]);
  console.log('files', files);

  const handeleChange = (event) => {
    let x = event.target.value;
    switch (event.target.name) {
      case 'username':
        setData({ ...data, username: x });
        break;
      case 'email':
        setData({ ...data, email: x });
        break;
      case 'password':
        setData({ ...data, password: x });
        break;

      case 'confirmPassword':
        setData({ ...data, confirmPassword: x });
        break;
      default:
        break;
    }
  };

  const handleReset = () => {
    setData(initData);
  };

  const fileOnChange = (event) => {
    setData({ ...data, avartar: event.target.files[0] });
  };
  const handleUploadFile = ({ target: { files } }) => {
    let avatar = new FormData();
    avatar.append('avatar', data.avatar);
  };

  const handleSubmit = (values) => {
    dispatch(
      handleUserCreate(values, ({ error, message }) => {
        if (error) {
          Notification('error', message);
        } else {
          Notification('success', message);
        }
      })
    );
  };

  return (
    <Fragment>
      <div className='modal-create-user'>
        <div className='input-infor'>
          <label htmlFor='username' className='label'>
            Username
          </label>
          <input
            type='text'
            value={data.username}
            name='username'
            className='input username'
            onChange={handeleChange}
          />
          <label htmlFor='email' className='label'>
            Email
          </label>
          <input
            type='email'
            name='email'
            className='input email'
            value={data.email}
            onChange={handeleChange}
          />
          <label htmlFor='password' className='label'>
            Password
          </label>
          <input
            type='password'
            name='password'
            value={data.password}
            className='input password'
            onChange={handeleChange}
          />
          <label htmlFor='confirmPassword' className='label'>
            Confirm Password
          </label>
          <input
            type='password'
            value={data.confirmPassword}
            name='confirmPassword'
            className='input confirmPassword'
            onChange={handeleChange}
          />
        </div>
        <div className='input-role-img'>
          <div className='upload-file'>
            <FilePond
              files={data.avatar}
              onupdatefiles={(fileItem) => {
                setData({ ...data, avartar: fileItem });
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
      <ul className='gr_btn_submit'>
        <li>
          <button type='submit' className='btn btn-save'>
            save change
          </button>
        </li>
        <li>
          <button type='button' className='btn btn-reset' onClick={handleReset}>
            Reset
          </button>
        </li>
      </ul>
    </Fragment>
  );
};

export default ModalCreateUser;
/*




*/
