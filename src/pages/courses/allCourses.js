import React, { useEffect, useState } from 'react'
import courses from './courses.module.css'
import { getCourse, deleteCourse, updateCourse } from '../../api/courses'
import { Table, Modal, Input, Tag, DatePicker, Select } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import TextArea from 'antd/lib/input/TextArea'
const { Column } = Table;
const { RangePicker } = DatePicker;


const Courses = () => {
  const [dataSource, setDataSource] = useState([])
  const [editingCourse, setEditingCourse] = useState(null)
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    const fetchDataCourse = async () => {
      let response = await getCourse()
      setDataSource(response.data)
    }
    fetchDataCourse()
  }, [])
console.log(editingCourse);
  const deleteItem = (record) => {
    Modal.confirm({
      title: 'Are you sure, you want to delete this course?',
      okText: 'Yes',
      okType: 'danger',
      onOk: () => {
        setDataSource(item => {
          return item.filter(course => course._id !== record._id)
        })
        deleteCourse(record._id)
      }
    })
  }

  const editItem = (record) => {
    setIsEditing(true)
    setEditingCourse({ ...record })
  }

  const resetEditing = () => {
    setIsEditing(false)
    setEditingCourse(null)
  }


  return (
    <section className={courses.section}>
      <Table dataSource={dataSource} rowKey={record => record._id}>
        <Column title="Title" dataIndex="title" key="title" />
        <Column title="Price" dataIndex="price" key="price" />
        <Column title="Description" dataIndex="description" ellipsis={true} key="description" />
        <Column
          title="What you will learn"
          dataIndex="whatYouWillLearn"
          ellipsis={true}
          key="whatYouWillLearn"
          render={(tags) => (
            <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', gap:'5px', flexWrap: 'wrap' }}>
              {tags.map((tag) => (
                <Tag style={{ textAlign: 'center', maxWidth: '150px', overflow:'hidden', paddingRight:'5px'}} color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </div>
          )} />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={(tags) => (
            <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', flexWrap: 'wrap' }}>
              {tags.map((tag) => (
                <Tag style={{ textAlign: 'center', maxWidth: '200px', }} color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </div>
          )}
        />
        <Column title="Dates" dataIndex='dates' key="dates" />
        <Column title="Teacher Name" dataIndex={['teacherID', 'fullname']} key="teacherID" />
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
        title='Edit Course'
        open={isEditing}
        okText='Save'
        onCancel={() => {
          resetEditing()
        }}
        onOk={() => {
          setDataSource(item => {
            return item.map(course => {
              if (course._id === editingCourse._id) {
                return editingCourse
              } else {
                return course
              }
            })
          })
          updateCourse(editingCourse._id, editingCourse)
          resetEditing()
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <span>Title</span>
          <Input value={editingCourse?.title} onChange={(e) => {
            setEditingCourse(item => {
              return { ...item, title: e.target.value }
            })
          }} />
          <span>Price</span>
          <Input value={editingCourse?.price} onChange={(e) => {
            setEditingCourse(item => {
              return { ...item, price: e.target.value }
            })
          }} />
          <span>Description</span>
          <TextArea showCount rows={4} placeholder="minLength is 50" minLength={50} maxLength={500} value={editingCourse?.description} onChange={(e) => {
            setEditingCourse(item => {
              return { ...item, description: e.target.value }
            })
          }} />
          <span>What You Will Learn</span>
          <Select mode='tags' placeholder='Write what you will learn' value={editingCourse?.whatYouWillLearn} onChange={(e) => {
            setEditingCourse(item => {
              return { ...item, whatYouWillLearn: e }
            })
          }} />
          <span>Tags</span>
          <Select mode='tags' placeholder='Write what you will learn' value={editingCourse?.tags} onChange={(e) => {
            setEditingCourse(item => {
              return { ...item, tags: e }
            })
          }} />

          <span>Tags</span>
          <RangePicker />

          <span>Teacher ID</span>
          <Input value={editingCourse?.teacherID._id} onChange={(e) => {
            setEditingCourse(item => {
              return { ...item, teacherID: e.target.value }
            })
          }} />
        </div>
      </Modal>
    </section>
  )
}

export default Courses