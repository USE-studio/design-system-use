/* eslint-disable */
import React,
{
  // useRef,
  useEffect,
  // useState,
  // createRef
} from 'react'
// import { API, graphqlOperation } from 'aws-amplify'
// import { Link, withRouter } from 'react-router-dom';

// import IlluIntro from '../../assets/icons/svg/IlluIntro'
// import IlluBxDesign from '../../assets/icons/svg/illus/IlluBxDesign'
// import IlluOverAllInfo from '../../assets/icons/svg/illus/IlluOverAllInfo'
// import IconHome from '../../assets/icons/svg/IconHome'
// import IconSearch from '../../assets/icons/svg/IconSearch'

import {
  TweenMax,
  Sine,
  // Back
} from 'gsap'

// Misc helper functions
// import { 
//   map,
//   generateRandomNumber
// } from '../assets/js/helpers'

const Table = () => {

  return (
    <div className="table-wrrapper">
      <div className="comparison">
        <table>
          <thead>
            {/* <tr>
              <th className="tl tl2"></th>
              <th className="product">Product_1</th>
              <th className="product">Product_2</th>
              <th className="product">Product_3</th>
            </tr>
            <tr>
              <th></th>
              <th className="price-info">
                <div className="price-now"><span>$ Price</span>
                  <p>  / year</p>
                </div>
              </th>
              <th className="price-info">
                <div className="price-now"><span>$ Price</span>
                  <p>  / year</p>
                </div>
              </th>
              <th className="price-info">
                <div className="price-now"><span>$ Price</span>
                  <p> / year</p>
                </div>
              </th>
            </tr> */}
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>Sass Variable: font-xxl-fp-wb</td>
            </tr>
            <tr className="compare-row">
              <td>item_1</td>
              <td><i className="fa fa-check"></i>
              </td>
              <td><span>–</span></td>
              <td><i className="fa fa-check"></i>
              </td>
            </tr>
            <tr>
              <td> </td>
              <td>item_2</td>
            </tr>
            <tr>
              <td>item_2</td>
              <td><i className="fa fa-check"></i>
              </td>
              <td><span>–</span></td>
              <td><i className="fa fa-check"></i>
              </td>
            </tr>
            <tr>
              <td> </td>
              <td>item_3</td>
            </tr>
            <tr className="compare-row">
              <td>item_3</td>
              <td><i className="fa fa-check"></i>
              </td>
              <td><span>–</span></td>
              <td><i className="fa fa-check"></i>
              </td>
            </tr>
            <tr>
              <td> </td>
              <td colspan="4">item_4</td>
            </tr>
            <tr>
              <td>item_4</td>
              <td><i className="fa fa-check"></i>
              </td>
              <td><span>–</span></td>
              <td><i className="fa fa-check"></i>
              </td>
            </tr>
            <tr>
              <td> </td>
              <td>item_5</td>
            </tr>
            <tr className="compare-row">
              <td>item_5</td>
              <td><span>–</span></td>
              <td><span>–</span></td>
              <td><i className="fa fa-check"></i>
              </td>
            </tr>
            <tr>
              <td> </td>
              <td colspan="4">item_6</td>
            </tr>
            <tr>
              <td>item_6</td>
              <td><span>–</span></td>
              <td><span>–</span></td>
              <td><i className="fa fa-check"></i>
              </td>
            </tr>
            <tr>
              <td> </td>
              <td>item_7</td>
            </tr>
            <tr className="compare-row">
              <td>item_7</td>
              <td><span>–</span></td>
              <td><span>–</span></td>
              <td><i className="fa fa-check"></i>
              </td>
            </tr>
            <tr>
              <td> </td>
              <td>item_8</td>
            </tr>
            <tr>
              <td>item_8</td>
              <td><span>–</span></td>
              <td><i className="fa fa-check"></i>
              </td>
              <td><i className="fa fa-check"></i>
              </td>
            </tr>
            <tr>
              <td> </td>
              <td>item_9</td>
            </tr>
            <tr className="compare-row">
              <td>item_9</td>
              <td><span>–</span></td>
              <td><i className="fa fa-check"></i>
              </td>
              <td><i className="fa fa-check"></i>
              </td>
            </tr>
            <tr>
              <td> </td>
              <td>item_10</td>
            </tr>
            <tr>
              <td>item_10</td>
              <td>description_union row</td>
            </tr>
            <tr>
              <td> </td>
            </tr>
            {/* <tr>
              <td></td>
              <td><a href="https://idc.wis.com.tw/contactUs?service=o365-email-security-solution" className="price-buy">button<span className="hide-mobile"></span></a></td>
              <td><a href="https://idc.wis.com.tw/contactUs?service=o365-email-security-solution" className="price-buy">button<span className="hide-mobile"></span></a></td>
              <td><a href="https://idc.wis.com.tw/contactUs?service=o365-email-security-solution" className="price-buy">button<span className="hide-mobile"></span></a></td>
            </tr> */}
          </tbody>
        </table>

      </div>
    </div>
  )
}

// export default withRouter(Header)
export default Table
