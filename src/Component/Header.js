import React from 'react'
import { Button } from 'reactstrap';
import App from '../App';
const Header =props =>{
  const {name,tuoi,gioitinh,lop} = props; 
  
  return (
    <div>
        <Button color="primary" href='/gaa'>Lập trình android</Button>{' '}
        <Button color="secondary" href='/about'>Lập trình java</Button>{' '}
        <Button color="success" href='https://gamevui.com'>GAMING giải trí</Button>{' '}
        <Button color="info">ETHICAL HACKING</Button>{' '}
        <Button color="warning">Lập trình JAVASCRIPT</Button>{' '}
        <Button color="danger">Cấu trúc dữ liệu và giải thuật</Button>{' '}
        <Button color="warning">Cơ sở dữ liệu</Button>{' '}
        <Button color="secondary">Trí tuệ nhân tạo</Button>{' '}
        <Button color="primary">Blockchain</Button>{' '}
      </div>
  );
};
export default Header;