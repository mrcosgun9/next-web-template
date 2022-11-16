import React from 'react'
import { useForm } from '@mantine/form';
import { TextInput, Button, Group, Textarea } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { Send } from 'tabler-icons-react';
function ContactForm() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      question: '',
    },
  });
  return (
    <div>
      <h1 className='text-lg font-bold mb-6'>DROP US A LINE</h1>
      <div className='grid grid-cols-2 gap-3 mb-3'>
        <TextInput placeholder="Your Name" label="Your Name" {...form.getInputProps('name')} className="form-input" withAsterisk />
        <TextInput placeholder="Your Email" label="Your Email" {...form.getInputProps('email')} className="form-input" withAsterisk />
      </div>
      <TextInput placeholder="Subject" label="Subject" {...form.getInputProps('subject')} className="form-input mb-3" />
      <Textarea
        className="form-input mb-3"
        placeholder="Your Message"
        label="Your Message"
        withAsterisk
      />
      <TextInput placeholder="Please answer the question" label="Please answer the question" {...form.getInputProps('question')} className="form-input mb-3" />
      <Group position="center" mt="xl">
        <Button radius="xs" size="md" className='primary-button' leftIcon={<Send />}>
          Send
        </Button>
      </Group>
    </div>
  )
}

export default ContactForm