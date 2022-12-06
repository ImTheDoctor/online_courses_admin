import React, { useEffect, useState } from 'react'
import courses from '../courses/courses.module.css'
import { getTeachers, deleteTeacher, updateTeacher } from '../../api/teachers'
import { Table, Modal, Input, Tag, Select, Upload, Button, Form } from 'antd'
import { EditOutlined, DeleteOutlined, UploadOutlined } from '@ant-design/icons'
const { TextArea } = Input;
const { Column } = Table;



const AllTeachers = () => {
  const [dataSource, setDataSource] = useState([])
  const [editingTeacher, setEditingTeacher] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [file, setFile] = useState(null)

  useEffect(() => {
    const fetchDataTeachers = async () => {
      let response = await getTeachers()
      setDataSource(response.data)
    }
    fetchDataTeachers()
  }, [])

  const deleteItem = (record) => {
    Modal.confirm({
      title: 'Are you sure, you want to delete this Teacher?',
      okText: 'Yes',
      okType: 'danger',
      onOk: () => {
        setDataSource(item => {
          return item.filter(teacher => teacher._id !== record._id)
        })
        deleteTeacher(record._id)
      }
    })
  }

  const editItem = (record) => {
    setIsEditing(true)
    setEditingTeacher({ ...record })
  }

  const resetEditing = () => {
    setIsEditing(false)
    setEditingTeacher(null)
  }

  return (
    <section className={courses.section}>
      <Table dataSource={dataSource} rowKey={record => record._id} pagination={{pageSize: 5}}>
        <Column title="Teacher ID" dataIndex="_id" key="_id" />
        <Column title="Fullname" dataIndex="fullname" key="fullname" />
        <Column title="Position" dataIndex="position" key="position" />
        <Column
          title="Image"
          dataIndex="teacherImgUrl"
          key="teacherImgUrl"
          render={(teacherImgUrl) =>
            <div style={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img style={{ width: '100px' }} alt={teacherImgUrl.fieldname} src={`http://localhost:5000/uploads/${teacherImgUrl.filename}`} />
            </div>}
        />
        <Column title="Description" dataIndex="description" key="description" ellipsis={true} />
        <Column
          title="Socials"
          dataIndex="socials"
          key="socials"
          render={(tags) => (
            <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', flexWrap: 'wrap' }}>
              {tags.map((tag) => (
                <Tag style={{ textAlign: 'center', maxWidth: '200px', }} color="blue" key={tag}>
                  {tag}
                </Tag>))}
            </div>)}
        />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <>
              <EditOutlined onClick={() => { editItem(record) }} />
              <DeleteOutlined onClick={() => { deleteItem(record) }} style={{ color: 'red', marginLeft: 12 }} />
            </>
          )}
        />
      </Table>
      <Modal
        title='Edit Teacher'
        open={isEditing}
        okText='Save'
        onCancel={() => {
          resetEditing()
        }}
        onOk={() => {
          const { fullname, position, description, socials } = editingTeacher
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
          setDataSource(item => {
            return item.map(teacher => {
              if (teacher._id === editingTeacher._id) {
                return editingTeacher
              } else {
                return teacher
              }
            })
          })
          updateTeacher(editingTeacher._id, formData)
          resetEditing()
        }}
      >
        <Form layout='vertical' encType="multipart/form-data" method="post">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <span>Fullname</span>
            <Input value={editingTeacher?.fullname} onChange={(e) => {
              setEditingTeacher(item => {
                return { ...item, fullname: e.target.value }
              })
            }} />
            <span>Position</span>
            <Input value={editingTeacher?.position} onChange={(e) => {
              setEditingTeacher(item => {
                return { ...item, position: e.target.value }
              })
            }} />

            <Form.Item label="Teacher image" rules={[
              {
                required: true,
                message: 'Image is required!',
              },
            ]}>
              <Upload name='teacherImgUrl' listType="picture" maxCount={1} beforeUpload={() => false} required onChange={(e) => {
                setFile(e.file)
              }} >
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </Form.Item>

            <span>Description</span>
            <TextArea showCount rows={4} placeholder="minLength is 50" minLength={50} maxLength={500} value={editingTeacher?.description} onChange={(e) => {
              setEditingTeacher(item => {
                return { ...item, description: e.target.value }
              })
            }} />
            <span>Socials</span>
            <Select mode='tags' placeholder='Enter a social links' allowClear value={editingTeacher?.socials} onChange={(e) => {
              setEditingTeacher(item => {
                return { ...item, socials: e }
              })
            }} />
            <span>Teacher ID</span>
            <Input value={editingTeacher?._id} disabled onChange={(e) => {
              setEditingTeacher(item => {
                return { ...item, teacherID: e.target.value }
              })
            }} />
          </div>
        </Form>
      </Modal>
    </section>
  )
}

export default AllTeachers

