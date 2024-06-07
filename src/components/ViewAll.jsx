import React from 'react'
import { NavBar } from './NavBar'

export const ViewAll = () => {
  return (
    <div>
        <NavBar></NavBar>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    
                <table class="table" border="2">
  <thead>
    <tr>
      <th scope="col">TITLE</th>
      <th scope="col">AUTHER</th>
      <th scope="col">PUBLISHED YEAR</th>
      <th scope="col">PRICE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ADUJEEVITHAM</td>
      <td>BENYAMIN</td>
      <td>2000</td>
      <td>299</td>
    </tr>
    <tr>
      <td>BALYAKALASAKHI</td>
      <td>BASHEER</td>
      <td>2003</td>
      <td>300</td>
    </tr>
    <tr>
      <td>WINGS OF FIRE</td>
      <td>DR.APJ ABDUL KALAM</td>
      <td>2010</td>
      <td>400</td>
    </tr>
    <tr>
      <td>HARRY POTTER</td>
      <td>J.K ROWLING</td>
      <td>2003</td>
      <td>3000</td>
    </tr>
    <tr>
      <td>PRIDE AND PREJUDICE</td>
      <td>JANE AUSTINE</td>
      <td>2007</td>
      <td>2999</td>
    </tr>
    <tr>
      <td>THE DIARY OF YOUNG GIRL</td>
      <td>ANNE FRANK</td>
      <td>2000</td>
      <td>399</td>
    </tr>
    <tr>
      <td>ANIMAL FARM</td>
      <td>GEORGE ORWELL</td>
      <td>1999</td>
      <td>499</td>
    </tr>
    <tr>
      <td>1984</td>
      <td>GEORGE ORWELL</td>
      <td>1899</td>
      <td>500</td>
    </tr>
    
  </tbody>
</table>

                </div>
            </div>
        </div>
    </div>
  )
}
