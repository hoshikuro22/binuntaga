import React from 'react'
import {
    addDoc,
    collection,
    getDoc,
} from 'firebase/firestore';
import { useState } from 'react';
import { database } from './firebaseConfig';

const RegForm = () => {

    const [fullname, setFullName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [fireData, setFireData] = useState('')
  
 
    
    const databaseReference = collection(database, 'Giatay');

    const addData = () => {
        addDoc(databaseReference, {
            fullname: fullname,
            age: age,
            gender: gender,
            address: address,
            number: number,
            email: email,
          
            
            
        })
    }

    const addAndRemove = () =>
     { 
        
        addData();
        setFullName("");
        setAge(""); 
        setGender("");
        setAddress("");
        setNumber("");
        setEmail("");
        
        
    }

   const erase = () => {
    setFullName("");
    setAge(""); 
    setGender("");
    setAddress("");
    setNumber("");
    setEmail("");

   }
 

   const getData = async () => {
    await getDoc(databaseReference)
    .then((response) => {
        setFireData(response.docs.map((data) => {
            return {...data.data(), id: data.id}
        }))
    })
}


    const print = () => {
        window.print();
    }

  return (
    <div name="RegForm" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-2'> 
                <p className='text-4xl font-bold inline border-b-4  border-gray-500'>Register Form</p>
                <p className='py-2'>
                    Type input below:
                </p>

        

            </div>
            <div className='flex justify-center items-center'>
                <div action="" className="flex flex-col w-full h-full md:w-1/2">


                    
                    <input 
                    required
                    type="text" 
                    // name="name" 
                    placeholder='Enter your Full Name' 
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4'
                    onChange={(event) => setFullName(event.target.value)}
                    value={fullname} />

                    <input 
                    required
                    type="text" 
                    // name="age" 
                    placeholder='Enter your Age' 
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4'
                    onChange={(event) => setAge(event.target.value)}
                    value={age} />

                    <input 
                    required
                    type="text" 
                    // name="gender" 
                    placeholder='Gender' 
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4'
                    onChange={(event) => setGender(event.target.value)}
                    value={gender} />

                    <input 
                    required 
                    type="text" 
                    // name="address" 
                    placeholder='Address' 
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4'
                    onChange={(event) => setAddress(event.target.value)}
                    value={address} />


                    <input 
                    required
                    type="text" 
                    // name="number" 
                    placeholder='Enter your Contact Number' 
                    className=' p-2 bg-transparent border-2 rounded-md text-white focus:outline-none flex-col mb-4' 
                    onChange={(event) => setNumber(event.target.value)}
                    value={number} />


                    <input 
                    required
                    type="text" 
                    // name="email" 
                    placeholder='Enter your Email' 
                    className=' p-2 bg-transparent border-2 rounded-md text-white focus:outline-none flex-col mb-1' 
                    onChange={(event) => setEmail(event.target.value)}
                    value={email} />

                    
                    <button 
                    className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mx-auto flex item-center rounded-md hover:scale-110 duration-300 mb-1'
                    onClick={addAndRemove}>
                    Submit
                    </button>

                    <button 
                    className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mx-auto flex item-center rounded-md hover:scale-110 duration-300 mb-1'
                    onClick={erase}>
                    Clear
                    </button>

                    <button 
                    className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mx-auto flex item-center rounded-md hover:scale-110 duration-300 mb-1'
                    onClick={getData()}>
                    GetData
                    </button>

                    <button
                    className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mx-auto flex item-center rounded-md hover:scale-110 duration-300 '
                   onClick={print} >
                        Print
                    </button>
                    <div>
                        
                  <table 
                    className='border rounded-md '>
                        <tr>
                           <th>Name</th>
                           <th>Age</th>
                           <th>Gender</th>
                           <th>Address</th>
                           <th>Contact Number</th>
                           <th>Email</th>
                           <th>Id</th>
                        </tr>
                        <tr>
                           <td>{fullname}</td>
                           <td>{age}</td>
                           <td>{gender}</td>
                           <td>{address}</td>
                           <td>{number}</td>
                           <td>{email}</td>
                        
                        </tr>
                        </table>
                        </div>

{/* 
                        <div>
              {fireData.map((data) => {
                                        return (
                                           
                                                <tr class="border-b">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{data.id}</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{data.fullname}</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{data.age}</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{data.gender}</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{data.address}</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{data.number}</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{data.email}</td>

                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    <button
                                                        class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none                                                                text-white font-bold py-2 px-4 rounded" type="button"
                                                        onClick={() => getData(data.id, data.fullname, data.age, data.gender, data.address, data.number, data.email)}
                                                    >Update</button></td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    <button
                                                        class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none                                                                         text-white font-bold py-2 px-4 rounded" type="button"
                                                        onClick={() => deleteDocument(data.id)}
                                                    >Delete</button></td>
                                                </tr>
                                           
                                        )
                                    })}

       </div> */}


                     
                   
                </div>
                
            </div>
            
        </div>
        
    </div>
    
  )
}

export default RegForm