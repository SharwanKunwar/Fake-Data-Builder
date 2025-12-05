import React, { useState } from 'react'
import {Button, Card, Form, Input, InputNumber, Select,Switch, Tooltip} from 'antd'
import SmallCard from './components/smallComponents/SmallCard'
import { AlignRight, Copy, Download, DownloadCloud } from "lucide-react";
import FormItem from 'antd/es/form/FormItem';
import {faker} from '@faker-js/faker';
import {nanoid} from 'nanoid';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


function App() {

  const [payload, setPayload] = useState('');
  const [inputDetails, setInputDetails] = useState('');


  const onCopy = () =>{
    alert("hell")
  }
  const generateData = (values) =>{
    const Temp = [];
    for(let i=0; i<values.noOfData; i++){
      if(values.data === "users"){
        Temp.push(generateUserData());
      }
    }
    setInputDetails(values.data)
    const str = JSON.stringify(Temp, null, 5);
    setPayload(str);
    console.log(Temp);
  }

  //generating the data
  const generateUserData = () => {
    let name = faker.person.firstName();
    let lastName = faker.person.lastName();
    return{
      id:nanoid(),
      fullName: name +" "+ lastName,
      address: faker.location.streetAddress({ useFullAddress: true }),
      email:faker.internet.email({ firstName: name, lastName: lastName, provider: 'gmail.com' }), // 'Jeanne_Doe88@example.fakerjs.dev',
      mobile:faker.phone.number({ style: 'international' }),
      // gender:"",
      // bio:"",
    }
  }

  

  return (
    <>
      <div className='bg-gray-200 w-screen h-screen'>

        {/* top div */}
        <div className='bg-slate-400 h-[30%] p-5'>
          <div className='px-10 pt-2'>
            <Card>
              <div className='h-[140px] flex justify-between gap-5'>
                <div className='w-6/12 h-full flex flex-col justify-center'>
                  <h1 className='text-4xl font-medium mb-4 tracking-wider'>Dummy Data Generator</h1>
                  <p className='text-lg text-neutral-400'>Generate up to 100 realistic JSON record for development, seeding databases, or API testing-with MongoDB-ready ObjectID and data support.</p>
                </div>
                <div className='w-6/12 flex justify-end items-end'>
                  <SmallCard/>
                </div>
              </div>
            </Card>
          </div>
        </div>


        {/* buttom div */}
        <div className='bg-slate-400 h-screen flex'>
          {/* left  */}
          <div className=' w-[30%] p-4 flex justify-center items-start py-10'>
            <Card className='shadow-md!' style={{padding:"10px", width:"90%", marginLeft:"40px"}} >
           <Form className='flex flex-col' layout='vertical' onFinish={generateData} initialValues={{data:"users", noOfData:4}}>

            <FormItem
              label="Choose Data"
              name="data"
              rules={[{required:true}]}
              className='w-full!'
              > 
              <Select
                  placeholder="Choose data"
                >
                  <Select.Option value="users">Users</Select.Option>
                  <Select.Option value="vehicle">Vehicle</Select.Option>
                  <Select.Option value="people">People</Select.Option>
                  <Select.Option value="cars">Cars</Select.Option>
                </Select>
            </FormItem>

            <FormItem
              label="Number of Data"
              name="noOfData"
              rules={[{required:true}]}
              className='w-full!'
              > 
              <InputNumber max={100} size='large' placeholder='Enter number of data' className='w-full! bg-red-400'/>
            </FormItem>

            <Button htmlType='submit' size='large' className='bg-indigo-400! text-white! mt-5 hover:text-white! hover:bg-indigo-500 shadow-sm'>Generate</Button>

           </Form>
           </Card>
          </div>



          {/* right  */}
          <div className=' w-[70%] pr-15 py-10'>
            <Card className='shadow-md!'>
              <div className='w-full h-[85vh]'>
                {/* top div  */}
                <div className=' h-[6%]'>
                  <div className='flex justify-between'>

                    {/* left div  */}
                    <div className='w-6/12'>
                    <h1 className='text-lg font-medium '>Payload Preview</h1>
                    </div>
                    
                    {/* right div  */}
                    <div className='w-6/12 flex justify-end items-center gap-4'>
                      <section className='flex gap-3'>
                        <h1>MongoDB JSON</h1>
                        <Switch />
                      </section>
                      <Button className='bg-slate-400! text-white!'><Download className="w-4 h-4 cursor-pointer hover:text-green-500" />Download</Button>

                      
  
                      
                    </div>
                  </div>
                </div>
                {/* buttom div  */}
                
                  <Card title={inputDetails} extra={
                    <Tooltip >
                      <Copy onClick={onCopy}/>
                    </Tooltip> 
                  }
                  className='mt-6! h-[90%]! bg-slate-300! '
                  >
                     <SyntaxHighlighter language="javascript" style={docco} className="h-[62vh] rounded-md bg-slate-300!">
                      {payload}
                    </SyntaxHighlighter>
                  </Card>
                

              </div>
            </Card>
          </div>

        </div>

      </div>
    </>
  )
}

export default App