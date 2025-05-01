import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./App.css";
import Stack from 'react-bootstrap/Stack';
import logos from './image.png';
import React, { useState, useEffect } from 'react';

export default function MainPage() {
  // State variables
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState({
    name_event: '',
    age: '',
    description: '',
    organisation_name: ''
  });

  // Fetch events from backend
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/events');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const newEvent = await response.json();
        setEvents(prev => [newEvent, ...prev]);  // Add new event to the state
        setIsCreating(false);                    // Close the form modal
        setFormData({                            // Reset form data
          name_event: '',
          age: '',
          description: '',
          organisation_name: ''
        });
      } else {
        console.error('Failed to create event: ', response.statusText);
      }
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  return (
    <div>
      <div className="text-content-title-login">
        <h1>Main Page</h1>
      </div>
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-indigo-700">Volunteering Events</h1>
            <p className="text-gray-600">Find the perfect opportunity to give back to your community</p>
          </header>

          <button 
            onClick={() => setIsCreating(true)}
            className="mb-6 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Create New Event
          </button>

          {/* Events List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div 
                key={event.id_event} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
                onClick={() => openModal(event)}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-semibold text-gray-800">{event.name_event}</h2>
                    <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                      Age: {event.age}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>Posted by: {event.organisation_name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Create Event Form */}
          {isCreating && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">Create New Event</h2>
                  <button 
                    onClick={() => setIsCreating(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </button>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Event Name</label>
                      <input
                        type="text"
                        name="name_event"
                        value={formData.name_event}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Age Group</label>
                      <input
                        type="text"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        rows="4"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Organization Name</label>
                      <input
                        type="text"
                        name="organisation_name"
                        value={formData.organisation_name}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() => setIsCreating(false)}
                      className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                    >
                      Post Event
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Event Details Modal */}
          {isModalOpen && selectedEvent && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">{selectedEvent.name_event}</h2>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </button>
                </div>
                <div className="flex items-center mb-4">
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                    Age: {selectedEvent.age}
                  </span>
                  <span className="ml-4 text-gray-600">
                    Posted by: {selectedEvent.organisation_name}
                  </span>
                </div>
                <div className="prose max-w-none">
                  <h3 className="text-lg font-medium mb-2">Description</h3>
                  <p className="text-gray-700 whitespace-pre-line">
                    {selectedEvent.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="chenar">
        <Stack direction="horizontal" gap={1}>
          <div className="text-login">
            <Link to="/">
              <Button className="butonlogin">Back home</Button>
            </Link>
          </div>
          <div className="header-titlu-poza">
            <div className="p-2">ImpactHUB</div> 
            <img src={logos} className="image-logo" alt="logos" />
          </div>
        </Stack>
      </div>
    </div>
  );
}