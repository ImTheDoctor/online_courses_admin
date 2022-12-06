import React, { useState } from 'react'
import courses from '../courses/courses.module.css'
import { Form, Input, Button, Upload, Select } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import { createTeacher } from '../../api/teachers';
const { TextArea } = Input

const AddTeacher = () => {
  const [addTeacher, setAddTeacher] = useState({})
  const [file, setFile] = useState(null)
  const [form] = Form.useForm();

  const onFinish = () => {
    const { fullname, position, description, socials } = addTeacher
    const formData = new FormData()
    formData.append('teacherImgUrl', file)

    const newInfo = {
      fullname,
      position,
      description,
      socials,
    }

    for (let key in newInfo) {
      formData.append(key, newInfo[key]);
    }
    createTeacher(formData)
    form.resetFields();
  }

  return (
    <section className={courses.section}>

      <Form layout='vertical' form={form} onFinish={onFinish} encType="multipart/form-data" method="post">

        <Form.Item label="Fullname" name='fullname'>
          <Input placeholder='Enter a teacher name' allowClear onChange={(values) => {
            setAddTeacher(item => {
              return { ...item, fullname: values.target.value }
            })
          }} />
        </Form.Item>

        <Form.Item label="Position" name='position'>
          <Input placeholder='Enter a teacher position' allowClear onChange={(values) => {
            setAddTeacher(item => {
              return { ...item, position: values.target.value }
            })
          }} />
        </Form.Item>

        <Form.Item label="Teacher image" name='teacherImgUrl' rules={[
          {
            required: true,
            message: 'Image is required!',
          },
        ]}>
          <Upload name='teacherImgUrl' listType="picture" maxCount={1} beforeUpload={() => false} onChange={(values) => {
            setFile(values.file)
          }}>
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item label="Description" name='description'>
          <TextArea showCount rows={4} placeholder="minLength is 50" minLength={50} maxLength={500} allowClear onChange={(values) => {
            setAddTeacher(item => {
              return { ...item, description: values.target.value }
            })
          }} />
        </Form.Item>

        <Form.Item label="Socials" name='socials'>
          <Select placeholder='Enter a social links' mode="tags" allowClear onChange={(value) => setAddTeacher(item => {
            return { ...item, socials: value }
          })} />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" type='primary' block>
            Save
          </Button>
        </Form.Item>

      </Form>
    </section >
  )
}

export default AddTeacher