import React, { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Button,
  Label,
  Modal,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";
import emailjs from "@emailjs/browser";

const onlineServices = ["Website design and development", "Google Analytics", "Social Media Marketing", "SEO or AI/AGI SEO", "Content Writing", "Platform Management Service", "Paid Advertising Service", "Influencer Marketing Service", "Community Engagement Service", "Google, Instagram, Facebook, LinkedIn, etc. Analytics and Reports", "Brand Awareness"];
const repairServices = ["Smartphone Repairs", "Laptop & Computer Repairs", "POS System Repairs", "Tablet Repairs", "Printer & Scanner Repairs", "Gaming Console Repairs"];
const itServices = ["Network Setup & Configuration", "Server Installation & Maintenance", "Network Security & Firewall Setup", "Structured Cabling & LAN Setup", "Cloud Computing & Storage Solutions", "VPN & Remote Access Solutions", "VoIP Phone System Setup"];

const Appointments = () => {
  const [serviceType, setServiceType] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceTypeChange = (e) => {
    setServiceType(e.target.value);
    setSelectedServices([]); // Reset selected services
  };

  const handleServiceSelection = (e) => {
    const { value, checked } = e.target;
    setSelectedServices((prev) =>
      checked ? [...prev, value] : prev.filter((service) => service !== value)
    );
  };

  const getServicesByType = () => {
    switch (serviceType) {
      case "Online Service":
        return onlineServices || [];
      case "IT Solution Services":
        return itServices || [];
      case "Repair Service":
        return repairServices || [];
      default:
        return [];
    }
  };

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_acuh4fl", // Replace with your EmailJS Service ID
        "template_yab2stb", // Replace with your EmailJS Template ID
        form.current,
        "yhT2q0sNVjOsSmaHK" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setIsModalOpen(true);  // Open modal on successful email submission
        },
        (error) => {
          console.error("Error sending email:", error);  // Log the entire error object
          alert("There was an issue with sending the email. Please try again later.");
        }
      );

    e.target.reset();
    setServiceType(""); // Reset service type
    setSelectedServices([]); // Reset selected services
    setSelectedDate(new Date()); // Reset date
};


  return (
    <section className="max-w-3xl mx-auto">
      <div className="mt-[55px]">
        <h2 className="text-2xl font-bold text-headingColor text-center">
          Book Appointment
        </h2>
        <form onSubmit={handleSubmit} ref={form} className="flex flex-col gap-4 pt-5 mx-5">
          <div className="w-full flex flex-col md:flex-row gap-5">
            <div className="w-full">
              <Label value="Your Name" />
              <TextInput
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
              />
            </div>
            <div className="w-full">
              <Label value="Your Email" />
              <TextInput
                type="email"
                name="email"
                placeholder="example123@gmail.com"
                required
              />
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row gap-5">
            <div className="w-full">
              <Label value="Phone Number" />
              <TextInput
                type="text"
                name="phone"
                placeholder="+1 20230340400"
                required
              />
            </div>
            <div className="w-full">
              <Label value="Select Your Service Type" />
              <Select
                name="serviceType"
                value={serviceType}
                onChange={handleServiceTypeChange}
                required
              >
                <option value="">Select Service Type</option>
                <option value="Online Service">Online Service</option>
                <option value="IT Solution Services">IT Solution Services</option>
                <option value="Repair Service">Repair Service</option>
              </Select>
            </div>
          </div>

          {serviceType && (
            <div className="space-y-2">
              <p className="font-semibold">Select Services:</p>
              <div className="flex gap-4 overflow-x-auto">
                {getServicesByType().map((service) => (
                  <label
                    key={service}
                    className="block border rounded-lg p-4 bg-gray-100 hover:bg-blue-100 transition cursor-pointer min-w-[150px]"
                  >
                    <input
                      type="checkbox"
                      name="selectedServices"
                      value={service}
                      onChange={handleServiceSelection}
                      checked={selectedServices.includes(service)}
                      className="block mx-auto"
                    />
                    <p className="mt-5 text-center">{service}</p>
                  </label>
                ))}
              </div>
            </div>
          )}

          {serviceType === "Repair Service" && (
            <div className="space-y-2">
              <div className="w-full flex flex-col md:flex-row gap-5">
                <div className="w-full flex flex-col">
                  <Label value="Select Date" />
                  <DatePicker
                    name="date"
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    minDate={new Date()}
                    dateFormat="yyyy-MM-dd"
                    className="bg-gray-50 border border-gray-200 rounded-md"
                  />
                </div>

                <div className="w-full">
                  <Label value="Choose Time Slot" />
                  <div className="w-full flex gap-2">
                    <TextInput
                      type="time"
                      name="startTime"
                      required
                    />
                    <TextInput
                      type="time"
                      name="endTime"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="w-full">
            <Label value="Message" />
            <Textarea
              name="message"
              placeholder="Type Your Message..."
              required
              rows={3}
            />
          </div>

          <Button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </Button>
        </form>
      </div>

      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Header>Thank You!</Modal.Header>
        <Modal.Body>
          <p>Your appointment has been successfully booked!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setIsModalOpen(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Appointments;
