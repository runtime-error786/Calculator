import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
let c1 = false,c2=false,c3=false;
function HI()
{
  let [cal,setcal]=useState();

  let[cal1,setc1]=useState('');
  let[cal2,setc2]=useState();
  let[cal3,setc3]=useState('');
  let [ans,setans]=useState();
  let [def,setdef]=useState(0);

    return(
    <>
        <div className='all'>

<div className='all2'>
 CALCULATOR
</div>


<div className='all1'>

        <div className='img1' id='j1'>
        <i class="fa-light fa-calculator fa-shake fa-2xl"></i>
        </div>
     &nbsp;&nbsp;&nbsp;
    <div className='img1' id='j1'>
    <i class="fa-duotone fa-thumbs-up fa-spin fa-2xl"></i>
    </div>
</div>
<div className='y1'>
{def}
{cal}
{cal1}
{cal2}
{cal3}
</div>
<div className='show'>
      <div className='w1' onClick={(e)=>{
        console.log("c",c2);
        if(c2==false)
        {
          let rw="";
          if(cal1==null)
          {
            
        rw = '1';
        setc1(rw);
          }
          else{

        rw = rw + cal1;
        rw = rw + '1';
        setc1(rw);
          }
        
        }
        else{
          
          let rw="";
          if(cal3==null)
          {
            
        rw = '1';
        setc3(rw);
          }
          else{

        rw = rw + cal3;
        rw = rw + '1';
        setc3(rw);
          }
        
        
        }
      }}>
      1
      </div>
      <div className='w2' onClick={(e)=>{
        if(c2==false)
        {

          
          let rw="";
          if(cal1==null)
          {
            
        rw = '2';
        setc1(rw);
          }
          else{

        rw = rw + cal1;
        rw = rw + '2';
        setc1(rw);
          }
        
        
        
        }
        else{
          
          let rw="";
          if(cal3==null)
          {
            
        rw = '2';
        setc3(rw);
          }
          else{

        rw = rw + cal3;
        rw = rw + '2';
        setc3(rw);
          }
        
        
        
        }
      }}>
      2
      </div>
      <div className='w3' onClick={(e)=>{
        if(c2==false)
        {

         
          let rw="";
          if(cal1==null)
          {
            
        rw = '3';
        setc1(rw);
          }
          else{

        rw = rw + cal1;
        rw = rw + '3';
        setc1(rw);
          }
        
        
        
        }
        else{
          
          let rw="";
          if(cal3==null)
          {
            
        rw = '3';
        setc3(rw);
          }
          else{

        rw = rw + cal3;
        rw = rw + '3';
        setc3(rw);
          }
        
        
        }
      }}>
      3
      </div>
      <div className='w4' onClick={(e)=>{
        if(c2==false)
        {

         
          let rw="";
          if(cal1==null)
          {
            
        rw = '4';
        setc1(rw);
          }
          else{

        rw = rw + cal1;
        rw = rw + '4';
        setc1(rw);
          }
        
        
        
        }
        else{
         
          let rw="";
          if(cal3==null)
          {
            
        rw = '4';
        setc3(rw);
          }
          else{

        rw = rw + cal3;
        rw = rw + '4';
        setc3(rw);
          }
        
        
        
        }
      }}>
      4
      </div>
      <div className='w5' onClick={(e)=>{
        if(c2==false)
        {

          
          let rw="";
          if(cal1==null)
          {
            
        rw = '5';
        setc1(rw);
          }
          else{

        rw = rw + cal1;
        rw = rw + '5';
        setc1(rw);
          }
        
        
        
        }
        else{
         
          let rw="";
          if(cal3==null)
          {
            
        rw = '5';
        setc3(rw);
          }
          else{

        rw = rw + cal3;
        rw = rw + '5';
        setc3(rw);
          }
        
        
        
        }
      }}>
      5
      </div>
      <div className='w6' onClick={(e)=>{
        if(c2==false)
        {

         
          let rw="";
          if(cal1==null)
          {
            
        rw = '6';
        setc1(rw);
          }
          else{

        rw = rw + cal1;
        rw = rw + '6';
        setc1(rw);
          }
        
        
        
        }
        else{
          
          let rw="";
          if(cal3==null)
          {
            
        rw = '6';
        setc3(rw);
          }
          else{

        rw = rw + cal3;
        rw = rw + '6';
        setc3(rw);
          }
        
        
        
        }
      }}>
      6
      </div>
      <div className='w7' onClick={(e)=>{
        if(c2==false)
        {

         
          let rw="";
          if(cal1==null)
          {
            
        rw = '7';
        setc1(rw);
          }
          else{

        rw = rw + cal1;
        rw = rw + '7';
        setc1(rw);
          }
        
        
        
        }
        else{
          let rw="";
          if(cal3==null)
          {
            
        rw = '7';
        setc3(rw);
          }
          else{

        rw = rw + cal3;
        rw = rw + '7';
        setc3(rw);
          }
        
        
        
        
        
        }
      }}>
      7
      </div>
      <div className='w8' onClick={(e)=>{
        if(c2==false)
        {

        
          let rw="";
          if(cal1==null)
          {
            
        rw = '8';
        setc1(rw);
          }
          else{

        rw = rw + cal1;
        rw = rw + '8';
        setc1(rw);
          }
        
        
        
        }
        else{
         
          let rw="";
          if(cal3==null)
          {
            
        rw = '8';
        setc3(rw);
          }
          else{

        rw = rw + cal3;
        rw = rw + '8';
        setc3(rw);
          }
        
        }
        
        
      }}>
      8
      </div>
      <div className='w9' onClick={(e)=>{
        if(c2==false)
        {

        
          let rw="";
          if(cal1==null)
          {
            
        rw = '9';
        setc1(rw);
          }
          else{

        rw = rw + cal1;
        rw = rw + '9';
        setc1(rw);
          }
        
        
        
        }
        else{
          
          let rw="";
          if(cal3==null)
          {
            
        rw = '9';
        setc3(rw);
          }
          else{

        rw = rw + cal3;
        rw = rw + '9';
        setc3(rw);
          }
        
        
        
        }
      }}>
      9
      </div>
      <div className='w0' onClick={(e)=>{
         if(c2==false)
        {
          let rw="";
          if(cal1==null)
          {
            
        rw = '0';
        setc1(rw);
          }
          else{

        rw = rw + cal1;
        rw = rw + '0';
        setc1(rw);
          }
        
        }
        else{
          
          let rw="";
          if(cal3==null)
          {
            
        rw = '0';
        setc3(rw);
          }
          else{

        rw = rw + cal3;
        rw = rw + '0';
        setc3(rw);
          }
        
        
        }
      }}>
      0
      </div>
      <div className='wp' onClick={()=>{
        setc2("+");
        c2 = true;
      }}>
      +
      </div>
      <div className='wm1' onClick={()=>{
        setc2("-");
        c2 = true;
        console.log("c2",c2);
      }}>
      -
      </div>
      <div className='wm2' onClick={()=>{
        setc2("*");
        c2 = true;
      }}>
      *
      </div>
      <div className='wd' onClick={()=>{
        setc2("/");
        c2 = true;
      }}>
      /
      </div>
      <div className='we' onClick={()=>{
        let r1 = parseInt(cal1);
        let r2 = parseInt(cal3);
        if(cal2=="+")
        {
            let f = r1 + r2;
            setcal(`${f}`);
            setc1(null);
            setc2("");
            setc3(null);
            c2=false;
        }
        else if(cal2=="-")
        {
          let f = r1 - r2;
            setcal(`${f}`);
            setc1(null);
            setc2("");
            setc3(null);
            c2=false;

        }
        else if(cal2=="*")
        {
          let f = r1 * r2;
            setcal(`${f}`);
            setc1(null);
            setc2();
            setc3(null);
            c2=false;

        }
        else if(cal2=="/")
        {
          let f = r1 / r2;
            setcal(`${f}`);
            setc1(null);
            setc2();
            setc3(null);
            c2=false;

        }
      }}  >
      =
      </div>
      <div className='wde' onClick={()=>{
        if(c2==false)
        {
        const newInputText = cal1.slice(0, -1); // Remove the last character
      setc1(newInputText);
        }
        else if(c2==true && cal3=="")
        {
          setc2();
          c2=false;
        }
        else{
          const newInputText = cal3.slice(0, -1); // Remove the last character
      setc3(newInputText);
        }
      }}>
      Delete
      </div>
      <div className='wcl' onClick={()=>{
            setans(cal);
        setc1(null);
            setc2();
            setc3(null);
            setcal(null);
            c2=false;

      }}>
      Clear
      </div>
      <div className='wan' onClick={()=>{
        if(c2==false)
        {
          setc1(ans);
        }
        else{
          setc3(ans);
        }
      }}>
      Ans
      </div>
</div>
  
 </div>
    </>
    )
}

export default HI;