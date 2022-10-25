import React from 'react';
import "./style.css";
function Index() {
    return (
        <div className="container-index">
           <select id="price-index">
                <option value="-1">Chọn mức giá</option>
               <option value="200000">Đến 2000000</option>
               <option value="400000">Đến 4000000</option>
               <option value="600000">Đến 6000000</option>
               <option value="800000">Đến 8000000</option>
           </select>
            <table border="1" id="table-pr">
                <tr>
                    <th colSpan="2">Hàng hóa</th>
                    <th>Đơn giá</th>
                    <th>Số lượng</th>
                    <th>Thành tiền</th>
                </tr>
                <tr>
                    <td><input type="checkbox" name="chon"/></td>
                    <td>Ip 14 Pro</td>
                    <td name="gia">45000000</td>
                    <td><input value="0" name="soluong" disabled/></td>
                    <td></td>
                </tr>
                <tr>
                    <td><input type="checkbox" name="chon"/></td>
                    <td>Ip 14 Pro</td>
                    <td name="gia">45000000</td>
                    <td><input value="0" name="soluong" disabled/></td>
                    <td></td>
                </tr>
                <tr>
                    <td><input type="checkbox" name="chon"/></td>
                    <td>Ip 14 Pro</td>
                    <td name="gia">45000000</td>
                    <td><input value="0" name="soluong" disabled/></td>
                    <td></td>
                </tr>
                <tr className="tong">
                    <th colSpan="3">Tổng</th>
                    <td id="tinhtong"><b>135000000</b></td>
                </tr>
            </table>
        </div>
    );
}
function doiomucgia(){
   var arrGia= document.getElementsByName("gia");
   var obj = document.getElementById("mucgia");
    let mucdangchon;
    mucdangchon = obj.value;
    let i;
    for (i=0;i<arrGia.length;i++){
        let gia;
        gia= parseFloat(arrGia[i].innerText);
        if (gia<mucdangchon){
            arrGia[i].parentNode.style.display="";
        }
        else {
            arrGia[i].parentNode.style.display="none";
        }
    }
}

export default Index;