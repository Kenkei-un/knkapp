import { useRef, useState } from "react";

export default function UnitConverter(){
    const [category, setCategory]=useState('');
    const catRef=useRef('');
    const unit1ref=useRef(null);
    const unit2ref=useRef(null);
    const value1ref=useRef(null);
    const value2ref=useRef(null);
    const unitsArray=[
        {cat:'Area', units:['Square kilometer','Square mile','Sqaure yard','Sqaure foot','Square inch','Hectare','Acre','Are','Square meter']},
        {cat:'Energy', units:['Joule','Kilojoule','Calorie','Kilocalorie','British thermal unit','Electronvolt']},
        {cat:'Length', units:['Kilometer','Meter','Centimeter','Millimeter','Micrometer','Nanometer','Yard','Foot','Inch','Nautical mile','Mile']},
        {cat:'Mass', units:['Kilogram','Tonne','Gram','Milligram','Microgram','Imperial ton','US ton','Stone','Ounce','Pound']},
        {cat:'PlaneAngle', units:['Degree','Gradian','Radian']},
        {cat:'Pressure', units:['Pascal','PSI','Atmosphere','Torr','Bar']},
        {cat:'Speed', units:['Kilometers per hour','Meters per second','Knot','Miles per hour']},
        {cat:'Time', units:['Second','Millisecond','Microsecond','Nanosecond','Picosecond','Hour','Day','Week','Month','Year','Minute']},
        {cat:'Volume', units:['Cubic meter','Milliliter','Cubic foot','Cubic inch','US gallon','US quart','US pint','US cup','US fluid ounce','Imperial gallon','Imperial quart','Imperial pint','Imperial cup','Imperial fluid ounce','Liter']},
        {cat:'Temperature', units:['Celsius','Kelvin','Fahrenheit']}
    ];
    const conversionTable=
    [
        {
            cat:'Length',
            conversions:
                {
                    base:'Meter',
                    multipliers:[
                        {'Meter':1},
                        {'Kilometer':1000},
                        {'Centimeter':0.01},
                        {'Millimeter':0.001},
                        {'Micrometer':0.000001},
                        {'Nanometer':0.000000001},
                        {'Yard':0.9144},
                        {'Foot':0.3048},
                        {'Inch':0.0254},
                        {'Nautical mile':1852},
                        {'Mile':1609.344}
                    ]
                }
        },
        {
            cat: 'Mass',
            conversions: {
                base: 'Kilogram',
                multipliers: [
                    { 'Kilogram': 1 },
                    { 'Tonne': 1000 },
                    { 'Gram': 0.001 },
                    { 'Milligram': 0.000001 },
                    { 'Microgram': 0.000000001 },
                    { 'Imperial ton': 1016.047 },
                    { 'US ton': 907.185 },
                    { 'Stone': 6.35029 },
                    { 'Ounce': 0.0283495 },
                    { 'Pound': 0.453592 }
                ]
            }
        },
        {
            cat: 'Area',
            conversions: {
                base: 'Square meter',
                multipliers: [
                    { 'Square meter': 1 },
                    { 'Square kilometer': 1000000 },
                    { 'Square mile': 2589988.11 },
                    { 'Sqaure yard': 0.836127 },
                    { 'Sqaure foot': 0.092903 },
                    { 'Square inch': 0.00064516 },
                    { 'Hectare': 10000 },
                    { 'Acre': 4046.86 },
                    { 'Are': 100 }
                ]
            }
        },
        {
            cat: 'Volume',
            conversions: {
                base: 'Cubic meter',
                multipliers: [
                    { 'Cubic meter': 1 },
                    { 'Milliliter': 0.000001 },
                    { 'Cubic foot': 0.0283168 },
                    { 'Cubic inch': 0.0000163871 },
                    { 'US gallon': 0.00378541 },
                    { 'US quart': 0.000946353 },
                    { 'US pint': 0.000473176 },
                    { 'US cup': 0.000236588 },
                    { 'US fluid ounce': 0.0000295735 },
                    { 'Imperial gallon': 0.00454609 },
                    { 'Imperial quart': 0.00113652 },
                    { 'Imperial pint': 0.000568261 },
                    { 'Imperial cup': 0.000284131 },
                    { 'Imperial fluid ounce': 0.0000284131 },
                    { 'Liter': 0.001 }
                ]
            }
        },
        {
            cat: 'Time',
            conversions: {
                base: 'Second',
                multipliers: [
                    { 'Second': 1 },
                    { 'Millisecond': 0.001 },
                    { 'Microsecond': 0.000001 },
                    { 'Nanosecond': 0.000000001 },
                    { 'Picosecond': 0.000000000001 },
                    { 'Minute': 60 },
                    { 'Hour': 3600 },
                    { 'Day': 86400 },
                    { 'Week': 604800 },
                    { 'Month': 2629800 }, // average month (30.44 days)
                    { 'Year': 31557600 } // average year (365.25 days)
                ]
            }
        },
        {
            cat: 'Speed',
            conversions: {
                base: 'Meter per second',
                multipliers: [
                    { 'Meters per second': 1 },
                    { 'Kilometers per hour': 0.277778 },
                    { 'Miles per hour': 0.44704 },
                    { 'Knot': 0.514444 }
                ]
            }
        },
        {
            cat: 'Pressure',
            conversions: {
                base: 'Pascal',
                multipliers: [
                    { 'Pascal': 1 },
                    { 'PSI': 6894.76 },
                    { 'Atmosphere': 101325 },
                    { 'Torr': 133.322 },
                    { 'Bar': 100000 }
                ]
            }
        },
        {
            cat: 'Energy',
            conversions: {
                base: 'Joule',
                multipliers: [
                    { 'Joule': 1 },
                    { 'Kilojoule': 1000 },
                    { 'Calorie': 4.184 },
                    { 'Kilocalorie': 4184 },
                    { 'British thermal unit': 1055.06 },
                    { 'Electronvolt': 0.0000000000000001602177 }
                ]
            }
        },
        {
            cat: 'PlaneAngle',
            conversions: {
                base: 'Radian',
                multipliers: [
                    { 'Radian': 1 },
                    { 'Degree': 0.0174533 },
                    { 'Gradian': 0.01570796 }
                ]
            }
        },
        {
            cat: 'Temperature',
            conversions: {
                base: 'Celsius',
                multipliers: [
                    { 'Celsius': 1 },
                    { 'Kelvin': 1 }, // Special handling needed
                    { 'Fahrenheit': 1 } // Special handling needed
                ]
            }
        }
    ];
    function convertUnits(start){
        //return if no category is selected
        if(category==='') return null;
        if(start===1){
            let fromUnit=unit1ref.current.value;
            let fromValue=value1ref.current.value;
            let toUnit=unit2ref.current.value;
        if(category!=='Temperature'){
        //check fromUnit to find multiplier to base unit
        let multiplierToBase=conversionTable.find(item=>item.cat===category).conversions.multipliers.find(m=>Object.keys(m)[0]===fromUnit)[fromUnit];
        //console.log(multiplierToBase);
        //convert to base unit
        let result=fromValue*multiplierToBase;
        //console.log(result);
        //find multiplier from base to toUnit
        let multiplierFromBase=conversionTable.find(item=>item.cat===category).conversions.multipliers.find(m=>Object.keys(m)[0]===toUnit)[toUnit];
        //console.log(multiplierFromBase);
        //convert to toUnit
        result=result/multiplierFromBase;
        //console.log(result);
        value2ref.current.value=result;
        }
        else{
            //special handling for temperature
            let result;
            if(fromUnit==='Celsius'&&toUnit==='Fahrenheit'){
                result=(fromValue*9/5)+32;
            }
            else if(fromUnit==='Fahrenheit'&&toUnit==='Celsius'){
                result=(fromValue-32)*5/9;
            }
            else if(fromUnit==='Celsius'&&toUnit==='Kelvin'){
                result=parseFloat(fromValue)+273.15;
            }
            else if(fromUnit==='Kelvin'&&toUnit==='Celsius'){
                result=parseFloat(fromValue)-273.15;
            }
            else if(fromUnit==='Fahrenheit'&&toUnit==='Kelvin'){
                result=(fromValue-32)*5/9+273.15;
            }
            else if(fromUnit==='Kelvin'&&toUnit==='Fahrenheit'){
                result=(fromValue-273.15)*9/5+32;
            }
            else{
                result=fromValue;
            }
            value2ref.current.value=result;
        }
        }
        else if(start===2){
            let fromUnit=unit2ref.current.value;
            let fromValue=value2ref.current.value;
            let toUnit=unit1ref.current.value;
        if(category!=='Temperature'){
            //check fromUnit to find multiplier to base unit
            let multiplierToBase=conversionTable.find(item=>item.cat===category).conversions.multipliers.find(m=>Object.keys(m)[0]===fromUnit)[fromUnit];
            //console.log(multiplierToBase);
            //convert to base unit
            let result=fromValue*multiplierToBase;
            //console.log(result);
            //find multiplier from base to toUnit
            let multiplierFromBase=conversionTable.find(item=>item.cat===category).conversions.multipliers.find(m=>Object.keys(m)[0]===toUnit)[toUnit];
            //console.log(multiplierFromBase);
            //convert to toUnit
            result=result/multiplierFromBase;
            //console.log(result);
            value1ref.current.value=result;
        }
        else{
            //special handling for temperature
            let result;
            if(fromUnit==='Celsius'&&toUnit==='Fahrenheit'){
                result=(fromValue*9/5)+32;
            }
            else if(fromUnit==='Fahrenheit'&&toUnit==='Celsius'){
                result=(fromValue-32)*5/9;
            }
            else if(fromUnit==='Celsius'&&toUnit==='Kelvin'){
                result=parseFloat(fromValue)+273.15;
            }
            else if(fromUnit==='Kelvin'&&toUnit==='Celsius'){
                result=parseFloat(fromValue)-273.15;
            }
            else if(fromUnit==='Fahrenheit'&&toUnit==='Kelvin'){
                result=(fromValue-32)*5/9+273.15;
            }
            else if(fromUnit==='Kelvin'&&toUnit==='Fahrenheit'){
                result=(fromValue-273.15)*9/5+32;
            }
            else{
                result=fromValue;
            }
            value1ref.current.value=result;
        }
    }
    }
    function categoryChange(){
        setCategory(catRef.current.value);
    }
    function reverseArray(arr){
        let newArr=[];
        for(let i=arr.length-1;i>=0;i--){
            newArr.push(arr[i]);
        }
        return newArr;
    }
    return(
        <>
        <div className="unitConverter">
            <h5>Common Conversions</h5>
            <label>Select Category
                <select ref={catRef} value={category} onChange={categoryChange}>
                    <option value=""></option>
                    <option value="Area">Area</option>
                    <option value="Energy">Energy</option>
                    <option value="Length">Length</option>
                    <option value="Mass">Mass</option>
                    <option value="PlaneAngle">Plane Angle</option>
                    <option value="Pressure">Pressure</option>
                    <option value="Speed">Speed</option>
                    <option value="Time">Time</option>
                    <option value="Volume">Volume</option>
                    <option value="Temperature">Temperature</option>
                </select>
            </label><br />
            {category!=''&&
            <div className="conversionBox">
            <strong>From</strong><input type="number" min={0} ref={value1ref} onChange={()=>convertUnits(1)}/>
            <select ref={unit1ref} onChange={()=>convertUnits(1)}>
                {unitsArray.map((item)=>{
                    if(item.cat===category){
                        return item.units.map((unit)=>{
                            return <option value={unit} key={unit}>{unit}</option>
                        })
                    }
                })}
            </select>
            <strong>To</strong><input type="number" min={0} ref={value2ref} onChange={()=>convertUnits(2)}/>
            <select ref={unit2ref} onChange={()=>convertUnits(1)}>
                {unitsArray.map((item)=>{
                    if(item.cat===category){
                        return reverseArray(item.units).map((unit)=>{
                            return <option value={unit} key={unit}>{unit}</option>
                        })
                    }
                })}
            </select>
            </div>
        }
        </div>
        </>
    );
}