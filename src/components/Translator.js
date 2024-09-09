import React, { useState } from 'react'

function Translator() {
    const [sourceLanguage, setSourceLanguage] = useState('en');
    const [targetLanguage, setTargetLanguage] = useState('te');
    const [error, setError] = useState(null);
    const [translatedText, setTranslatedText] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = 'https://text-translator2.p.rapidapi.com/translate';
        const data = new FormData();
        data.append('source_language', sourceLanguage);
        data.append('target_language', targetLanguage);
        data.append('text', text);

        const options = {
            method: 'POST',
            headers: {
                'x-rapidapi-key': 'ea86ec0756msh17e532df1e1c9c9p170c20jsnebad0933d91c',
                'x-rapidapi-host': 'text-translator2.p.rapidapi.com'
            },
            body: data
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            
            setTranslatedText(result.data.translatedText);
            setError(null);
        } catch (error) {
            console.error(error);
            setError(error);
        }
    }

    return (
        <section className='container my-5'>
            <h1 className='text-center'>Translator App</h1>
            <form onSubmit={handleSubmit}>
                <label className='form-label'>Source Language</label>
                <select className="form-select" value={sourceLanguage} onChange={(e) => setSourceLanguage(e.target.value)}>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="hi">Hindi</option>
                    <option value="te">Telugu</option>
                </select>

                <label className='form-label'>Target Language</label>
                <select className="form-select" value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)}>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="hi">Hindi</option>
                    <option value="te">Telugu</option>
                </select>

                <label className='form-label'>Enter text</label>
                <textarea className='form-control' rows={5} value={text} onChange={(e) => setText(e.target.value)} ></textarea>

                <button className='btn btn-success my-2'>Translate</button>
            </form>
            {error && <div className='alert alert-danger'>{error}</div>}

            {translatedText && (
                <div className='alert alert-primary'>
                    <p>Translated text: {translatedText}</p>
                </div>
            )}
        </section>
    )
};

export default Translator;