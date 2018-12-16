import React from 'react';
import { Table } from 'reactstrap';
import Img from 'react-image'
const about = (props) => {
  return (
      <div> 
        <Table>
        <thead>
          <tr>
            <th>#</th>
            <th><a href='google.com'>Đăng kí</a></th>
            <th><a href='youtube.com'>Đăng kí</a></th>
            <th><a href='youtube.com'>Đăng kí</a></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Các khóa học</th>
            <td><img src='https://upload.wikimedia.org/wikipedia/vi/f/f6/Tom_Tom_and_Jerry.png' width='100pt' heigth='100pt'/></td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">Tên giáo viên</th>
            <td><del>Nam</del>Mèo tôm</td>
            <td>LỆ rơi</td>
            <td>Đàm vĩnh hưng</td>
          </tr>
          <tr>
            <th scope="row">Kinh nghiệm dậy học</th>
            <td>1 ngày lập trình</td>
            <td>3 ngày lập trình</td>
            <td>0 biết lập trình</td>
          </tr>
        </tbody>
      </Table>
      <hr/>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th><a href='google.com'>Đăng kí</a></th>
            <th><a href='youtube.com'>Đăng kí</a></th>
            <th><a href='youtube.com'>Đăng kí</a></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Các khóa học</th>
            <td><img src='https://upload.wikimedia.org/wikipedia/vi/f/f6/Tom_Tom_and_Jerry.png' width='100pt' heigth='100pt'/></td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">Tên giáo viên</th>
            <td><del>Nam</del>Mèo tôm</td>
            <td>LỆ rơi</td>
            <td>Đàm vĩnh hưng</td>
          </tr>
          <tr>
            <th scope="row">Kinh nghiệm dậy học</th>
            <td>1 ngày lập trình</td>
            <td>3 ngày lập trình</td>
            <td>0 biết lập trình</td>
          </tr>
        </tbody>
      </Table>
     </div>
  ); 
};
export default about;