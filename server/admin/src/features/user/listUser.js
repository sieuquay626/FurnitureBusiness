import React, { useState, Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IMAGES } from '../../assets/index';
import './style.scss';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import * as Icon from 'react-feather';
import { UI } from '../../components/elements';
import { Link } from 'react-router-dom';
import PanigationBox from '../../components/elements/PaginationBox';
import {
  handleUserList,
  handleUserSetQuery,
  handleUserCreate,
  handleUserEdit,
} from '../../redux/actions/user';
import Notification from '../../components/elements/Notification';
import { replaceTiengVietCoDau } from '../../utils/helpers';

const User = () => {
  const dispatch = useDispatch();

  const [config, setConfig] = useState({
    checkAll: false,
    selectItems: [],
  });

  console.log(config.selectItems);
  const [sort, setSort] = useState({
    sort: 'asc',
    sortBy: 'createAt',
  });

  const query = useSelector((state) => state.user.query);
  useEffect(() => {
    dispatch(handleUserList(query));
  }, [query]);

  const dataSource = useSelector((state) => state.user.listUser);

  const onFinish = (event) => {
    event.preventDefault();
    const search = replaceTiengVietCoDau(event.target.searchStr.value);

    if (query.search !== event.target.searchStr.value) {
      dispatch(handleUserSetQuery({ ...query, pageCurrent: 1, search }));
    }
  };

  // const onChangeSelectAll = (select) => {
  //   setConfig({
  //     ...config,
  //     checkAll: !config.checkAll,
  //     selectItems:
  //       config.selectItems.length < dataSource.length
  //         ? dataSource.map((item) => {
  //             return item._id;
  //           })
  //         : [],
  //   });
  // };

  const onChangeSelect = (select, data) => {
    if (select.target.checked) {
      setConfig({
        ...config,
        selectItems: config.selectItems.push(data),
      });
    }
  };

  const handleChangePage = (page, pageSize) => {
    dispatch(handleUserSetQuery({ ...query, pageCurrent: page }));
  };
  const renderListUser = () => {
    let result = '';
    let dataAgencyShow = dataSource;
    if (dataAgencyShow && dataAgencyShow.length > 0) {
      result = dataAgencyShow.map((item, index) => {
        return (
          <div
            className='row itemlist'
            key={item._id}
            style={{ backgroundColor: index % 2 === 0 ? '#fbfcff' : 'white' }}
          >
            <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1 col-item'>
              <UI.CheckBox
                checked={config.selectItems.indexOf(item._id) !== -1}
                // config.checkAll ||
                label=''
                value={item._id}
                onChange={(e) => onChangeSelect(e, item._id)}
              />
            </div>
            <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2 col-item code'>
              <Link
                to='#'
                onClick={() => {
                  // toggleDisplay();
                }}
              >
                {item.username}
              </Link>
            </div>
            <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3 col-item'>
              {item.email}
            </div>
            <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2 col-item'>
              {item.role}
            </div>
            <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2 col-item'>
              {String(item.active)}
            </div>
            <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2 col-item'>
              <Link to='#' onClick={() => dispatch(handleUserEdit())}>
                <Icon.Edit style={{ color: 'goldenrod' }} />
              </Link>
              <Link to='#'>
                <Icon.Trash style={{ color: 'orangered' }} />
              </Link>
            </div>
          </div>
        );
      });
      return result;
    }
  };

  return (
    <div className='users container-fluid'>
      <div className='row top'>
        <div className='actions action-bns'>
          <div className='btn-create'>
            <Button
              type='primary'
              shape='round'
              icon={<Icon.Plus />}
              onClick={() => {
                dispatch(handleUserCreate());
              }}
              size={'large'}
            >
              Create
            </Button>
          </div>
          <div className={`btn-delete ${config.checkAll ? 'active' : ''}`}>
            <Button
              type='danger'
              shape='round'
              icon={<Icon.Trash2 />}
              size={'large'}
            >
              Delete
            </Button>
          </div>
        </div>

        <div className='action-search'>
          <img
            src={IMAGES.icons_search}
            className='img-responsive'
            alt='icons search'
          />
          <form onSubmit={onFinish}>
            <input
              type='text'
              name='searchStr'
              className='form-control'
              placeholder='Tìm kiếm'
            />
          </form>
        </div>
      </div>

      <div className='row title-table'>
        <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1 col-item'>
          <UI.CheckBox
            className='check-all'
            // onChange={onChangeSelectAll}
            checked={config.checkAll}
            label=''
          />
        </div>
        <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2 col-item'>
          Username
        </div>

        <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3 col-item'>
          Email
        </div>

        <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2 col-item'>Role</div>

        <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2 col-item'>
          Active
        </div>

        <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2 col-item'>
          Actions
        </div>
      </div>
      {renderListUser()}
      <PanigationBox
        total={dataSource.length + 1}
        pageSize={query.pageSize}
        onChange={handleChangePage}
      />
    </div>
  );
};

export default User;
