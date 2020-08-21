import React, { Fragment, useState } from 'react';
import './style.scss';
import Header from '../../layout/header';
import { useSelector, useDispatch } from 'react-redux';
import { Rating } from '@material-ui/lab';
import { Collapse } from 'antd';
import 'antd/dist/antd.css';
import * as Icon from 'react-feather';
import { handleAddCart, handleMinusCart } from '../../../redux/actions/cart';
const { Panel } = Collapse;

const ProductDetail = (props) => {
  const state = useSelector((state) => state.product.listProduct);
  const dispatch = useDispatch();
  const [accordion, setAccordion] = useState(false);
  const handleChangeAccordion = () => {
    setAccordion(!accordion);
  };
  const handlePlusAmount = (data) => {
    dispatch(handleAddCart(data));
  };
  const handleMinusAmount = (data) => {
    if (data.amount > 1) {
      dispatch(handleMinusCart(data.product));
    }
  };

  const AccordionHeader = () => {
    return (
      <div className='accordion-header'>
        <Icon.Info />
        <div className='accordion-header-title'>Detail</div>
      </div>
    );
  };
  const AccordionContent = () => {
    return (
      <div className='infor-accordion-content'>
        <div className='materials'>
          Materials:Powder coated steel, aluminium bearing.
        </div>
        <div className='dimension'>Dimensions Ø34 × H48.5 cm </div>
      </div>
    );
  };

  const RenderDetailInfor = ({ id }) => {
    return state.map((item, index) => {
      return item._id == id ? (
        <div className='detail-infor'>
          <div className='detail img-detail'>
            <img
              src={`http://localhost:5000/${item.coverImage}`}
              alt='No Image'
            />
          </div>
          <div className='detail infor-detail'>
            <div className='infor-detail-title'>{item.title}</div>
            <div className='brand-title'>Hay</div>
            <div className='infor-rating'>
              <Rating name='read-only' value={item.avgRating} readOnly />
              <div className='count-review'>
                ({item.rateCount} customer review)
              </div>
            </div>
            <div className='product-price'>
              <div className='discounted-price'>
                ${(item.price * (100 - item.discount) * 0.01).toFixed(2)}
              </div>
              <div className={`main-price ${item.discount ? 'show' : ''}`}>
                ${item.price}
              </div>
            </div>

            <Collapse accordion>
              <Panel header={<AccordionHeader />} key='1'>
                {<AccordionContent />}
              </Panel>
            </Collapse>
            <Collapse accordion>
              <Panel header={<AccordionHeader />} key='2'>
                {<AccordionContent />}
              </Panel>
            </Collapse>
            <div className='item-amount'>
              <div
                className='amount'
                // className={`amount ${item.amount == 1 ? 'hidden' : ''}`}
                // onClick={() => handleMinusAmount(item)}
              >
                <Icon.Minus />
              </div>
              <div className='amount val'>{1}</div>
              <div
                className='amount'
                // onClick={() => handlePlusAmount(item.product)}
              >
                <Icon.Plus />
              </div>
              <div className='addToCart'>
                <span>Add To Cart</span>
              </div>
            </div>
            <div className='title-category'>
              CATEGORIES :
              {item.categories.map((cate, index) => {
                return (
                  <span key={index}>
                    {` `}
                    {cate.title}
                    {index == item.categories.length - 1 ? '' : ','}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      ) : null;
    });
  };

  return (
    <Fragment>
      <Header />
      <div className='product-detail'>
        <div className='content'>
          <RenderDetailInfor id={props.match.params.id} />
          <div className='brand-infor'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
            minima tenetur iusto eos ullam in quasi consectetur ab aliquid
            fugiat animi, ipsa voluptates sequi, deleniti sed id nulla odit hic.
          </div>
          <div className='product-interest'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            similique itaque mollitia velit placeat. Ab ipsa optio, quam,
            sapiente a labore laboriosam eligendi nemo corporis, quas voluptate
            obcaecati incidunt cum.
          </div>
          <div className='description-reivew'>
            <div className='description'>Description</div>
            <div className='review'>Review(1)</div>
            <div className='infor-description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, eveniet iure adipisci id reiciendis dolores omnis, fuga
              rem delectus cupiditate alias, accusamus repellat fugiat placeat
              praesentium mollitia vitae itaque expedita!
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetail;

/*

 <div className='item-amount'>
                <div
                  className={`amount ${item.amount == 1 ? 'hidden' : ''}`}
                  // onClick={() => handleMinusAmount(item)}
                >
                  <Icon.Minus />
                </div>
                <div className='amount val'>{item.amount}</div>
                <div
                  className='amount'
                  // onClick={() => handlePlusAmount(item.product)}
                >
                  <Icon.Plus />
                </div>
              </div>
            </div>
*/
