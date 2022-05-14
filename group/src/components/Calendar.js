import React, { useEffect, useState } from "react";
import { Modal, Button, Space, Card, notification, message } from 'antd';
import { Input, Drawer } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'antd';
import { Form } from 'antd';
import { UserOutlined, KeyOutlined, QuestionCircleFilled, LockOutlined, PushpinOutlined, CalendarOutlined } from '@ant-design/icons';
import events from '../staticData/staticEvent';
import { Calendar } from "react-big-calendar";
import { momentLocalizer } from 'react-big-calendar'
import { fetchGet, fetchPost } from '../utils/request'
import DatePicker from "react-datepicker";
import moment from 'moment'
import Homepage from './Homepage';
import "react-datepicker/dist/react-datepicker.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import '../css/Calendar.css';
import { Refresh } from "@mui/icons-material";



const localizer = momentLocalizer(moment)


function EventCreater(props) {

    const [createForm] = Form.useForm()
    const [loading, setLoading] = useState(false);
    const [FD, setFD] = useState(false)  // states of drawer
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "", location: "" }); // new event
    const [allEvents, setAllEvents] = useState(events); // all event states
    const [isModalVisible, setIsModalVisible] = useState(false); // modal state
    const [formErrors, setformErrors] = useState(events); // form complete error state.
    const [isSubmit, setissubmit] = useState(false) // submit click state.
    const key = 'updatable';
    const history = useNavigate();


    const loadEvents = async () => {
        const url = "/api/event/list";
        const result = await fetchGet(url);

        // console.log(formErrors);
        const eve = result.data.events
        console.log("this is event", eve)

        let showingEvents = [];
        if (result.data && result.data.events && result.data.events.length > 0) {
            result.data.events.map((e) => {

                e.start = new Date(Date.parse(e.start))
                e.end = new Date(Date.parse(e.end))

            })
            showingEvents = [...allEvents, ...result.data.events];
        } else {
            showingEvents = allEvents;
        }
        // console.log("all events are: ", showingEvents);
        setAllEvents(showingEvents)

    }

    if (!loading) {
        loadEvents();
        setLoading(true);
    }


    const error = () => {
        message.error('Create event failed, please try again.');
    };

    const showDrawer = () => {
        setFD(true);
    };
    const onClose = () => {
        setFD(false);
    };      //set state of drawer

    const handlesubmit = async () => {
        setformErrors(validate(newEvent))
        setissubmit(true)
        console.log("new event is: ", newEvent);
        const url = "/api/event/create";
        const result = await fetchPost(url, newEvent);

        if (result.code === 200) {
            history("/calendar");
        } else {
            error();
        }
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            setAllEvents([...allEvents, newEvent])
            console.log(newEvent.start)
        }
    }, [formErrors]) // if no form empty then set the new event

    const validate = (value) => {
        const errors = {}
        if (!value.title) {
            errors.title = "Title is required!"
        }
        if (!value.location) {
            errors.location = "Location is required!"
        }
        if (!value.start) {
            errors.start = "Start date is required!"
        }
        if (!value.end) {
            errors.end = "End date is required!"
        }
        return errors
    }

    const openNotification = () => {
        if (formErrors.titlen == "") {
            notification.open({
                key,
                message: 'It seems that you miss Event detail! Will navigate to calendar after 2s. Check it and come back later!',
                description: 'Warning!',
            })

        }
        else if (formErrors.locatioin == "") {
            notification.open({
                key,
                message: 'It seems that you miss Event Location! Will navigate to calendar after 2s. Check it and come back later!',
                description: 'Warning!',
            })

        }

    }; // check form comeplete state and give warning or success message.

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);

    };

    const handleCancel = (e) => {
        setIsModalVisible(false);
    };

    function resolveAfter2Seconds() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('resolved');
                newEvent.start = ''
                newEvent.end = ''
                createForm.resetFields()
            }, 2000);
        });
    }

    async function asyncCall() {

        const result = await resolveAfter2Seconds();
        showModal()
        onClose()
        window.location.reload(false)


    }


    return (
        <div>
            <Homepage></Homepage>

            <div className="allContainer">
                <div>
                    <Card >
                        <Calendar localizer={localizer} events={allEvents}
                            startAccessor="start" endAccessor="end" />
                    </Card>
                </div>
                <div>
                    <Drawer title="Create Event" placement="right" onClose={onClose} visible={FD} width={520} style={{ zIndex: '999' }}>
                        <Card>
                            <Form onFinish={handlesubmit}
                                autoComplete="off"
                                form={createForm}
                            >
                                <Form.Item
                                    name="title"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input Event Title!',
                                        },
                                    ]}
                                >
                                    <Input placeholder='Event Title' prefix={<UserOutlined className="site-form-item-icon" />} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                                </Form.Item>

                                <Form.Item
                                    name="location"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input Event Location!',
                                        },
                                    ]}
                                >
                                    <Input placeholder='Event Location' prefix={<PushpinOutlined className="site-form-item-icon" />} onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })} />
                                </Form.Item>

                                <Form.Item
                                    name="startDate"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please select Event Start Date!',
                                        },
                                    ]}
                                >
                                    <DatePicker placeholderText="Start Date:" selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} className='datePickBox' />
                                </Form.Item>

                                <Form.Item
                                    name="endDate"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please select Event End Date!',
                                        },
                                    ]}
                                >
                                    <DatePicker placeholderText="End Date:" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} className='datePickBox' />
                                </Form.Item>

                                <Form.Item>
                                    <Button type='primary' htmlType="submit" onClick={() => { openNotification(); asyncCall(); }}>
                                        Create Event
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Drawer>
                </div>
                <Button data-tesid="eventButton" className="eventButton" type="primary" onClick={showDrawer} id='eventButton'>Add New Event</Button>
            </div>

        </div>




    )
}

export default EventCreater
