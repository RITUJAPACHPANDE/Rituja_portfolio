import { useState, useRef, useEffect } from 'react';
import { FaTerminal, FaCircle } from 'react-icons/fa';
import './DeveloperCLI.css';

export default function DeveloperCLI() {
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome to Rituja-OS CLI v1.0.0' },
    { type: 'system', text: 'Type "help" to view list of available commands.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const cliBodyRef = useRef(null);

  const commandResponses = {
    help: 'Available commands:\n  about     - Brief bio of Rituja\n  skills    - List of core competencies\n  projects  - Highlighted project summary\n  contact   - Get contact credentials\n  clear     - Clean the console history',
    about: 'Rituja Pachpande is a Software Developer focused on Full Stack Java and React development. Passionate about solving real-world challenges, implementing clean code architectures, and participating in team sprints.',
    skills: 'Core Competencies:\n  - Languages: Java, SQL, JavaScript, HTML, CSS\n  - Frameworks: Spring Boot, React.js, Hibernate/JPA\n  - Tools: Git, GitHub, DevSecOps pipelines\n  - Services: Client communication, Requirement analysis',
    projects: 'Featured Projects:\n  - Food Delivery Web App (MERN Stack with Stripe Payment Integration)\n  - Hospital Management System (Spring Boot, Spring Security, Hibernate & MySQL)',
    contact: 'Contact Info:\n  - Email: ritujapachpane12@gmail.com\n  - Phone: +91 6268635941\n  - LinkedIn: https://www.linkedin.com/in/rituja-pachpande-25771a316'
  };

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'input', text: `rituja-os$ ${inputVal}` }];

    if (cmd === 'clear') {
      setHistory([]);
    } else if (commandResponses[cmd]) {
      newHistory.push({ type: 'output', text: commandResponses[cmd] });
      setHistory(newHistory);
    } else {
      newHistory.push({ type: 'error', text: `Command not found: "${cmd}". Type "help" for a list of commands.` });
      setHistory(newHistory);
    }

    setInputVal('');
  };

  useEffect(() => {
    if (cliBodyRef.current) {
      cliBodyRef.current.scrollTop = cliBodyRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <section className="cli-section reveal">
      <div className="section-header">
        <span className="section-subtitle">Interactive Playground</span>
        <h2 className="section-title-text">Developer Console</h2>
        <div className="title-underline"></div>
      </div>

      <div className="cli-container">
        <div className="cli-window">
          <div className="cli-header">
            <div className="cli-dots">
              <FaCircle className="dot-red" />
              <FaCircle className="dot-yellow" />
              <FaCircle className="dot-green" />
            </div>
            <div className="cli-title"><FaTerminal /> bash - rituja@terminal</div>
          </div>
          
          <div className="cli-body" ref={cliBodyRef}>
            {history.map((line, idx) => (
              <div key={idx} className={`cli-line type-${line.type}`}>
                {line.text}
              </div>
            ))}
            <form onSubmit={handleCommandSubmit} className="cli-input-form">
              <span className="cli-prompt">rituja-os$</span>
              <input 
                type="text" 
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type command..."
                autoComplete="off"
                aria-label="Terminal command"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
