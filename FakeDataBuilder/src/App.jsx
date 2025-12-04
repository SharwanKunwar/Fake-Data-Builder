import React from 'react'
import {Button, Card, Form, Input, Select,Switch} from 'antd'
import SmallCard from './components/smallComponents/SmallCard'
import { Copy, Download } from "lucide-react";
import FormItem from 'antd/es/form/FormItem';


function App() {
  return (
    <>
      <div className='bg-gray-200 w-screen h-screen'>

        {/* top div */}
        <div className='bg-slate-400 h-[30%] p-5'>
          <div className='px-10 pt-2'>
            <Card>
              <div className='h-[140px] flex justify-between gap-5'>
                <div className='w-6/12 h-full flex flex-col justify-center'>
                  <h1 className='text-4xl font-medium mb-4 tracking-wider'>Fake Data Generator</h1>
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
           <Card className='shadow-md!' style={{padding:"10px"}} >
              <div className='flex flex-col gap-1'>
                <label htmlFor="dataType" className='font-medium'>Data Type</label>
                <Select
                  id="dataType"
                  placeholder="Select Data Type"
                >
                  <Select.Option value="vehicle">Vehicle</Select.Option>
                  <Select.Option value="people">People</Select.Option>
                  <Select.Option value="cars">Cars</Select.Option>
                </Select>
                <label className='mt-5 font-medium'>Number of items (max 100)</label>
                <Input type="number" required/>
                <label className='text-neutral-500'>Set how many items to generate (1-100)</label>
                
                <label className='text-neutral-400 mt-5'>Quick sample size</label>
                <Input type={"range"} min={1} max={100}/>
                <Button size='large' className='bg-indigo-400! text-white! mt-5 hover:text-white! hover:bg-indigo-500 shadow-sm'>Generate</Button>
              </div>
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
                      <Button className='bg-slate-400! text-white!'><Copy className="w-4 h-4 cursor-pointer hover:text-blue-500" />Copy</Button>
                      <Button className='bg-slate-400! text-white!'><Download className="w-4 h-4 cursor-pointer hover:text-green-500" />Download</Button>

                      
  
                      
                    </div>
                  </div>
                </div>
                {/* buttom div  */}
                <div className='bg-gray-50 h-[90%] mt-5 p-2 border border-green-400/30 backdrop-blur-sm rounded-md shadow'>
                  <pre>
                    1<br/>
                    2<br/>
                    3<br/>
                    4<br/>
                    5<br/>
                    6
                  </pre>
                </div>

              </div>
            </Card>
          </div>

        </div>

      </div>
    </>
  )
}

export default App