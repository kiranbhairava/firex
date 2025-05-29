
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    selectPost: '',
    name: '',
    currentLocation: '',
    preferredLocation: '',
    email: '',
    mobile: '',
    workExperience: '',
    qualification: '',
    currentSalary: '',
    expectedSalary: '',
    resume: null
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">JOB APPLICATION FORM</h2>
      <p className="text-gray-600 mb-6">
        Send your CV at hr@kanexfire.com or fill up below form.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select onValueChange={(value) => handleInputChange('selectPost', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select Post" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="engineer">Engineer</SelectItem>
              <SelectItem value="technician">Technician</SelectItem>
              <SelectItem value="sales">Sales Executive</SelectItem>
              <SelectItem value="manager">Manager</SelectItem>
            </SelectContent>
          </Select>

          <Input
            placeholder="Name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            placeholder="Current Location"
            value={formData.currentLocation}
            onChange={(e) => handleInputChange('currentLocation', e.target.value)}
          />

          <Input
            placeholder="Preferred Location"
            value={formData.preferredLocation}
            onChange={(e) => handleInputChange('preferredLocation', e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
          />

          <Input
            placeholder="Mobile"
            value={formData.mobile}
            onChange={(e) => handleInputChange('mobile', e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            placeholder="Work Experience (in Years)"
            value={formData.workExperience}
            onChange={(e) => handleInputChange('workExperience', e.target.value)}
          />

          <Input
            placeholder="Qualification"
            value={formData.qualification}
            onChange={(e) => handleInputChange('qualification', e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            placeholder="Current Salary"
            value={formData.currentSalary}
            onChange={(e) => handleInputChange('currentSalary', e.target.value)}
          />

          <Input
            placeholder="Expected Salary"
            value={formData.expectedSalary}
            onChange={(e) => handleInputChange('expectedSalary', e.target.value)}
          />
        </div>

        <div>
          <Input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setFormData(prev => ({ ...prev, resume: e.target.files?.[0] || null }))}
            className="w-full"
          />
          <p className="text-sm text-gray-500 mt-1">Upload your resume (PDF, DOC, DOCX)</p>
        </div>

        <div className="flex items-center space-x-2">
          <input type="checkbox" id="captcha" className="w-4 h-4" />
          <label htmlFor="captcha" className="text-sm text-gray-600">I'm not a robot</label>
        </div>

        <Button 
          type="submit" 
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-medium"
        >
          Submit
        </Button>
      </form>
    </section>
  );
};

export default JobApplicationForm;
