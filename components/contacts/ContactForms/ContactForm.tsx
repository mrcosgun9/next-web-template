import React from 'react'
import { useForm } from '@mantine/form';
import { TextInput, Button, Group, Textarea } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { Check, Send, X } from 'tabler-icons-react';
function ContactForm() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      question: '',
    },
    validate: {
      name: (value) => value.length < 2 ? 'Too short name' : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      subject: (value) => value == "" ? 'Required' : null,
      message: (value) => value == "" ? 'Required' : null,
      question: (value) => value == "" ? 'Required' : null,
    }
  });
  const onSubmit = async (values: any) => {
    await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(values)
    });
    // showNotification({
    //   title: 'Successfully',
    //   message: 'Message sent successfully.',
    //   color: "teal",
    //   icon: <Check size={16} />,
    // });
    // showNotification({
    //   title: 'Failed',
    //   message: 'Error sending message!',
    //   color: "red",
    //   icon: <X size={16} />,
    // })
  }
  return (
    <div>
      <h1 className='text-lg font-bold mb-6'>DROP US A LINE</h1>
      <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
        <div className='grid grid-cols-2 gap-3 mb-3'>
          <TextInput placeholder="Your Name" label="Your Name" {...form.getInputProps('name')} className="form-input" withAsterisk />
          <TextInput placeholder="Your Email" label="Your Email" {...form.getInputProps('email')} className="form-input" withAsterisk />
        </div>
        <TextInput placeholder="Subject" label="Subject" {...form.getInputProps('subject')} className="form-input mb-3" />
        <Textarea
          className="form-input mb-3"
          {...form.getInputProps('message')}
          placeholder="Your Message"
          label="Your Message"
          withAsterisk
        />
        <TextInput placeholder="Please answer the question" label="Please answer the question" {...form.getInputProps('question')} className="form-input mb-3" />
        <div className='flex justify-end mt-8'>
          <Button radius="xs" size="md" className='primary-button' type='submit' leftIcon={<Send />}>
            Send
          </Button>
        </div>
      </form>

    </div>
  )
}

export default ContactForm