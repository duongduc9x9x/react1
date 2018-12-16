import React from 'react';

import { Jumbotron, Button } from 'reactstrap';
import { Alert } from 'reactstrap';
const Gaa= (props) => {
    return (
 <div> 
   <Jumbotron>
        <h1 className="display-3">Lập trình android</h1>
        <p className="lead">Đây là trang hướng dẫn</p>
        <hr className="my-2" />
        <p>Nếu bạn thấy hay hãy đăng kí</p>
        <p className="lead">
          <Button color="primary" href='https://developer.android.com/'>Đăng kí</Button>
        </p>
      </Jumbotron>
      <Alert color="primary">
        Hãy mua ngay
      </Alert>
      <Alert color="success">
        <h4 className="alert-heading">Well done!</h4>
        <p>
          Tôi có tuổi thơ đầy dữ dội, tôi sinh ra đã là thằng được ông trời cho không được thông minh cho lắm,thôi thì kệ mẹ tôi vậy !!! Cảm ơn các bạn 
        </p>
      </Alert>
    
</div>
  );
    };
export default Gaa;