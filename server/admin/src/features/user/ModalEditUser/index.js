import React from 'react';
import { FilePond, registerPlugin, setOptions } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';
import FilePondPluginImageEdit from 'filepond-plugin-image-edit';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { UI } from '../../../components/elements';
import { useDispatch } from 'react-redux';
import { handleUserCreate } from '../../../redux/actions/user';
import Notification from '../../../components/elements/Notification';
registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginImageResize,
  FilePondPluginImageCrop,
  FilePondPluginImageEdit
);
const ModalEditUser = () => {
  return (
    <div className='modal' style={{ width: '300px' }}>
      <h1>Edit</h1>
    </div>
  );
};

export default ModalEditUser;
