import React, { useState } from 'react'
import {Button, Card, Empty, Form, Input, InputNumber, message, Select,Switch, Tooltip} from 'antd'
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
    navigator.clipboard.writeText(payload);
    message.success("Data copied !!")
  }
  const generateData = (values) =>{
    const Temp = [];  // holding data of object 
    for(let i=0; i<values.noOfData; i++){
      //for person
      if(values.data === "Users"){
        Temp.push(generateUserData());
      }
      // for Product
      if(values.data === "Product"){
        Temp.push(generateProductData());
      }
      // for Payment
      if(values.data === "Payment"){
        Temp.push(generatePaymentData());
      }
    }
    setInputDetails(values.data) //set which category
    const str = JSON.stringify(Temp, null, 5); // converting data in string
    setPayload(str); //set payload
    console.log(Temp);
  }

  //generating userData
  const generateUserData = () => {
    let name = faker.person.firstName();
    let lastName = faker.person.lastName();
    return{
      id:nanoid(),
      fullName: name +" "+ lastName,
      address: faker.location.streetAddress({ useFullAddress: true }),
      email:faker.internet.email({ firstName: name, lastName: lastName, provider: 'gmail.com' }), // 'Jeanne_Doe88@example.fakerjs.dev',
      mobile:faker.phone.number({ style: 'international' }),
      createAt: faker.date.anytime(),
      // gender:"",
      // bio:"",
    }
  }

  //generating Product data
  const generateProductData = () => {
    
    return{
      id:nanoid(),
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: Number(faker.commerce.price({min:1000, max:5000})),
      discount: Number(faker.commerce.price({min:0, max: 50})),
      rating: Number(faker.commerce.price({min:1, max:5})),
      category: faker.commerce.productAdjective(),
      brand: faker.company.buzzNoun(),
      image: faker.image.urlLoremFlickr({category:'product'}),
      createAt: faker.date.anytime(),
    }
  }


  //generating Vehicle data
  const generatePaymentData = () => {
    
    let name = faker.person.firstName();
    let lastName = faker.person.lastName();

    return{
      id:nanoid(),
      user:{
        id:nanoid(),
        fullName: faker.person.fullName(),
        email:faker.internet.email({ firstName: name, lastName: lastName, provider: 'gmail.com' }), // 'Jeanne_Doe88@example.fakerjs.dev',
      },
      Product:{
        id:nanoid(),
        title: faker.commerce.productName()
      },
      amount: Number(faker.commerce.price({min:1000, max:5000})),
      orderID: `TSC-${nanoid()}`,
      method: "ESWA",
      tax: Number(faker.commerce.price({min:0, max:50})),
      createAt: faker.date.anytime(),
    }
  }

  /// ... so on ...

  

  return (
    <>
      <div className=' bg-slate-400 w-screen h-screen '>

        {/* top div */}
        <div className=' h-[30vh] flex items-end justify-center'>
          <div className=' pt-2 px-15 w-full'>
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
          <div className=' w-[30%] p-4 flex justify-center items-start py-5'>
            <Card className='shadow-md!' style={{padding:"10px", width:"90%", marginLeft:"40px"}} >
           <Form className='flex flex-col' layout='vertical' onFinish={generateData} initialValues={{data:"Users", noOfData:4}}>

            <FormItem
              label="Choose Data"
              name="data"
              rules={[{required:true}]}
              className='w-full!'
              > 
              <Select
                  placeholder="Choose data"
                >
                  <Select.Option value="Users">Users</Select.Option>
                  <Select.Option value="Product">Product</Select.Option>
                  <Select.Option value="Payment">Payment</Select.Option>

                  
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
          <div className=' w-[70%] pr-15 py-5'>
            <Card className='shadow-md!'>
              <div className='w-full h-[85vh]'>
                {/* top div  */}
                <div className=' h-[6%]'>
                  <div className='flex justify-between'>

                    {/* left div  */}
                    <div className='w-6/12 flex justify-start items-center text-indigo-500'>
                    <h1 className='text-2xl font-medium '>Payload Preview</h1>
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
                    <Tooltip title="Copy data">
                      <Copy onClick={onCopy} />
                    </Tooltip> 
                  }
                  className='mt-8! h-[88%]! bg-slate-300! '
                  >
                     {
                      payload.length === 0 ?
                      <Empty 
                        image={Empty.PRESENTED_IMAGE_DEFAULT}
                        imageStyle={{ height: 250 }}   // Increase height
                        description="Click Generate button to get your first payload."
                      />
                      : 
                      <SyntaxHighlighter language="c" style={docco} className="h-[62vh] rounded-md bg-slate-300!" showLineNumbers>
                        {payload}
                      </SyntaxHighlighter>
                     }
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