// karaokae.js
import React, { useState } from 'react';

function KaraokeBilling() {
  const [total, setTotal] = useState(0);
  const [noHaveChecked, setNoHaveChecked] = useState(false);
  const [haveChecked, setHaveChecked] = useState(false);
  const [qty1, setQty1] = useState('');
  const [qty2, setQty2] = useState('');

  const calculate = () => {
    // เช็คว่าผู้ใช้กรอกจำนวนชั่วโมงหรือไม่
    if ((noHaveChecked && qty1.trim() === '') || (haveChecked && qty2.trim() === '')) {
      alert('กรุณากรอกจำนวนชั่วโมง');
      return;
    }

    const hours = parseFloat(noHaveChecked ? qty1 : qty2) || 0;
    const rate = noHaveChecked ? 120 : 80;

    const totalAmount = hours * rate;
    setTotal(totalAmount);
  };

  return (
    <div style={{ border: '1px solid black', padding: '5px', display: 'inline-block', marginTop: '10px', marginLeft: '10px' }}>
      <table width="400" border="2" style={{ border: '3px solid black'}}>
        <tbody>
        <div style={{ border: '1px solid black',margin: '2px' }}>
            <td colSpan="2" id="karaokae">ร้านคาราโอเกะ</td>
        </div>
          <div style={{ border: '1px solid black',margin: '2px' }}>
            <td>
              <br />
              &nbsp;&nbsp;
              <input
                type="radio"
                name="c1"
                id="nohave"
                value="no"
                checked={noHaveChecked}
                onChange={() => {
                  setNoHaveChecked(true);
                  setHaveChecked(false);
                }}
              />
              ไม่มีบัตรนักศึกษา
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ชั่วโมงละ 120 บาท จำนวน
              <input
                style={{ border: '1px solid black',margin: '0px 3px',}}
                type="text"
                size="2"
                id="txtqty1"
                value={qty1}
                onChange={(e) => setQty1(e.target.value)}
                disabled={!noHaveChecked}
              />
              ชั่วโมง
              <br />
              &nbsp;&nbsp;
              <input
                type="radio"
                name="c1"
                id="have"
                value="yes"
                checked={haveChecked}
                onChange={() => {
                  setNoHaveChecked(false);
                  setHaveChecked(true);
                }}
              />
              มีบัตรนักศึกษา
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ชั่วโมงละ 80 บาท จำนวน
              <input
                style={{ border: '1px solid black',margin: '0px 3px',}}
                type="text"
                size="2"
                id="txtqty2"
                value={qty2}
                onChange={(e) => setQty2(e.target.value)}
                disabled={!haveChecked}
              />
              ชั่วโมง
              <br />
              <br />
            </td>
          </div>
        </tbody>
      </table>
      <br />
      <button onClick={calculate} 
            style={{
            border: '1px solid black',
            backgroundColor: '#dddddd',
            padding: '1px 5px',
            borderRadius: '5px',
        }}>คิดเงิน</button>
      <br />
      รวมเป็นเงินทั้งสิ้น =
      <input type="text" id="txtTotal" value={total} readOnly style={{ border: '1px solid black',margin: '0px 3px',paddingLeft: '10px', }}  />
      บาท
    </div>
  );
}

export default KaraokeBilling;
