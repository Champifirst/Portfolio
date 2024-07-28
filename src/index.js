import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

    class Ind extends React.Component {
        render() {
            return (
                <div className="container">
                    <App />
                </div>
            );
        }
    }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Ind/>);