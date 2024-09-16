Here's a **README** for your LangChain-based Rate My Professor GPT model project:

---

# **ProfGPT - Personalized Course Advisor**

### **Project Description**

**ProfGPT** is a LangChain-based GPT-3.5 powered model that helps students select the best courses based on their preferences, strengths, and professor reviews. After the first semester, students often feel confused about which subjects to take due to the sheer number of available courses (50+ courses), each with its own syllabus and professor. To solve this, we built **ProfGPT**, an intuitive chatbot that fetches and analyzes professor reviews from Reddit and RateMyProfessor to give personalized course recommendations based on a student's competencies and interests. 

The application features a **Next.js frontend chat interface** where students can interact with the AI model to receive course suggestions tailored to their unique learning styles and goals.

### **Use Case**

**Problem**: After the first semester, many students struggle to select courses that align with their competencies and career aspirations. With over 50+ subjects available, it can be overwhelming to research each course's syllabus, professor reviews, and compatibility with their strengths and interests.

**Solution**: We created a personalized course advisor using LangChain and GPT-3.5, combined with data from platforms like RateMyProfessor and Reddit. Students can now get suggestions on courses that best match their abilities and preferences, improving the decision-making process for course registration.

### **Features**
- **Personalized course suggestions** based on student choices and preferences.
- **Analysis of professor reviews** scraped from RateMyProfessor and Reddit.
- **User-friendly chatbot interface** built using Next.js for seamless interaction.
- **GPT-3.5 powered responses** for course structure insights and feedback.

---

### **Getting Started**

To get started with ProfGPT, follow these steps:

#### **Prerequisites**

- Node.js (v14.x or higher)
- Python (v3.8 or higher)
- OpenAI API key
- RateMyProfessor and Reddit API credentials (for scraping professor reviews)
- Next.js installed

#### **Installation**

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/prof-gpt.git
   cd prof-gpt
   ```

2. **Install Dependencies**

   In the root directory, run the following command to install backend dependencies:

   ```bash
   pip install -r requirements.txt
   ```

   Then, navigate to the frontend directory and install the Next.js dependencies:

   ```bash
   cd frontend
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add your API keys for GPT-3.5, Reddit, and RateMyProfessor:

   ```bash
   OPENAI_API_KEY=your_openai_api_key
   REDDIT_API_KEY=your_reddit_api_key
   RMP_API_KEY=your_rmp_api_key
   ```

4. **Start the Backend (LangChain Model)**

   In the root directory, start the LangChain model by running:

   ```bash
   python app.py
   ```

5. **Start the Frontend (Next.js App)**

   Navigate to the frontend directory and start the Next.js application:

   ```bash
   cd frontend
   npm run dev
   ```

6. **Access the Application**

   Open your browser and go to `http://localhost:3000`. You should see the chat interface where you can interact with ProfGPT to get course recommendations based on your preferences.

---

### **Usage**

1. **Input Your Preferences**: Open the chat application, and provide details about your course preferences, strengths, and interests. You can ask the model questions like "Which courses are good for machine learning?" or "Which professor has the best reviews for Data Structures?"

2. **Get Personalized Suggestions**: The model will analyze your input and fetch relevant course and professor data, providing tailored course recommendations.

3. **Refine Your Choices**: You can continue the conversation with the model to refine your course list or get more details about specific professors and course syllabi.

---

### **Future Enhancements**
- Add more data sources for comprehensive professor and course reviews.
- Implement student feedback features to continually improve course recommendations.
- Integrate a recommendation engine for students based on their academic performance and career goals.

---

### **Contributors**
- **[Your Name]**
- **[Contributors' Names]**

Feel free to contribute and make this project even more powerful!

---

This README provides a clear project description, use case, and step-by-step setup instructions for users. Let me know if you want to tweak any part or add more details!
