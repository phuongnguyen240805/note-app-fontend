import { createContext, useState } from 'react';

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
    const [selectedNoteId, setSelectedNoteId] = useState(null);

    return (
        <NoteContext.Provider value={{ selectedNoteId, setSelectedNoteId }}>
            {children}
        </NoteContext.Provider>
    );
};
