import React, { useState } from 'react'
import courses from './courses.module.css'
import { Form, Input, DatePicker, Button, Select } from 'antd'
import moment from 'moment'
import { createCourse } from '../../api/courses'

const { TextArea } = Input
const { RangePicker } = DatePicker;

const AddCourse = () => {
  const [addDate, setAddDate] = useState([])
  const [addCourse, setAddCourse] = useState(null)
  const [form] = Form.useForm();
  
  const onFinish = () => {
    const { title, price, description, whatYouWillLearn, tags, teacherID } = addCourse
    const newInfo = {
      title,
      price,
      description,
      whatYouWillLearn,
      tags,
      dates: addDate,
      teacherID
    }
    createCourse(newInfo)
    form.resetFields();
  }

  return (
    <section className={courses.section}>
      <Form layout='vertical' form={form} onFinish={onFinish} encType="multipart/form-data" method="post">

        <Form.Item label="Title" name='title'>
          <Input placeholder='Enter a course name' allowClear onChange={(values) => {
            setAddCourse(item => {
              return { ...item, title: values.target.value }
            })
          }} />
        </Form.Item>
        
        <Form.Item label="Price" name='price'>
          <Input placeholder='Enter a course price' allowClear onChange={(values) => {
            setAddCourse(item => {
              return { ...item, price: values.target.value }
            })
          }} />
        </Form.Item>
        
        <Form.Item label="Description" name='description'>
          <TextArea showCount rows={4} placeholder="minLength is 10" minLength={50} maxLength={500} allowClear onChange={(values) => {
            setAddCourse(item => {
              return { ...item, description: values.target.value }
            })
          }} />
        </Form.Item>
        
        <Form.Item label="What you will learn" name='whatYouWillLearn'>
          <Select placeholder='What you will learn?' mode='tags' allowClear onChange={(value) => {
            setAddCourse(item => {
              return { ...item, whatYouWillLearn: value }
            })
          }} />
        </Form.Item>
        
        <Form.Item label="Tags" name='tags'>
          <Select placeholder='Enter your tags' mode='tags' allowClear onChange={(value) => {
            setAddCourse(item => {
              return { ...item, tags: value }
            })
          }} />
        </Form.Item>
        
        <Form.Item label="DatePicker" name='date'>
          <RangePicker placeholder='Enter date' allowClear onChange={(values) => {
            setAddDate(values.map(item => {
              return moment(item).format('YYYY-DD-MM')
            }))
          }} />
        </Form.Item>
        
        <Form.Item label="teacherID" name='teacherID'>
          <Input placeholder='Enter a Teacher ID' allowClear onChange={(values) => {
            setAddCourse(item => {
              return { ...item, teacherID: values.target.value }
            })
          }} />
        </Form.Item>
        
        <Form.Item>
          <Button htmlType="submit" type='primary' block>
            Save
          </Button>
        
        </Form.Item>
      </Form>
    </section>
  )
}

export default AddCourse