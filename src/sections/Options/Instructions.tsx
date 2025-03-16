import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Smartphone, Sun, Cuboid as Cube, FileText, ClipboardCheck, Save } from "lucide-react";

const Instructions: React.FC = () => {
  const navigate = useNavigate();
  
  return (

    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg shadow-xl">
      <div className="container mx-auto px-4 py-6">
        <button
          onClick={() => navigate('/maintenance-view')}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
        </div>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold white mb-2">Augmented Reality (AR) Instructions</h1>
        <p className="text-gray-300">Follow the step-by-step guide to use AR features efficiently.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            icon: <Smartphone size={24} />,
            title: "Open the AR Scanner",
            description: "Launch the AR module and scan the designated QR code linked to the machine."
          },
          {
            icon: <Sun size={24} />,
            title: "Ensure Proper Lighting",
            description: "A well-lit environment improves detection accuracy and enhances the AR experience."
          },
          {
            icon: <Cube size={24} />,
            title: "Interact with the 3D Model",
            description: "Rotate, zoom, and inspect machine components to understand their structure and functionality."
          },
          {
            icon: <FileText size={24} />,
            title: "Follow On-Screen Guidance",
            description: "Use the interactive AR overlay to access maintenance instructions, highlight key parts, and perform troubleshooting steps."
          },
          {
            icon: <ClipboardCheck size={24} />,
            title: "Verify Maintenance Steps",
            description: "Complete each task as instructed, ensuring all required checks are performed."
          },
          {
            icon: <Save size={24} />,
            title: "Exit and Save Progress",
            description: "Once done, exit AR mode and save any observations for future reference."
          }
        ].map((item, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
            <div className="flex items-center mb-2">
              <div className="bg-valorant-red p-2 rounded-full mr-3">
                {item.icon}
              </div>
              <h2 className="text-lg font-semibold">{item.title}</h2>
            </div>
            <p className="text-gray-300 ml-12">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-gray-800 rounded-lg border border-gray-700">
        <p className="text-gray-300 italic">
          This AR feature enhances machine maintenance by providing real-time, interactive guidance 
          for better efficiency and accuracy.
        </p>
      </div>

      
    </div>
  );
};

export default Instructions;