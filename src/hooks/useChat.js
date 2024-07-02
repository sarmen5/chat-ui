const data = [
    {
        id: '1',
        user_name: 'Armen',
        user_id: '1',
        role: 'Engineering',
        message: 'Hi team👋',
        created_at: '2024-07-02T11:31:00',
    },
    {
        id: '2',
        user_name: 'Armen',
        user_id: '1',
        role: 'Engineering',
        message: 'Anyone on for lunch today',
        created_at: '2024-07-02T11:31:00',
    },
    {
        id: '3',
        user_name: 'Jav',
        src: '/images/img-4.jfif',
        user_id: '2',
        role: 'Engineering',
        message: "I'm down! Any Ideas??",
        created_at: '2024-07-02T11:35:00',
    },
    {
        id: '4',
        user_name: 'Armen',
        user_id: '1',
        role: 'Engineering',
        message: "I'm down for whatever!",
        created_at: '2024-07-02T11:36:00',
    },
    {
        id: '5',
        user_name: 'Aubrey',
        src: '/images/img-3.jfif',
        user_id: '3',
        role: 'Product',
        message: 'I was thinking the cafe downtown',
        created_at: '2024-07-02T11:45:00',
    },
    {
        id: '6',
        user_name: 'Aubrey',
        src: '/images/img-3.jfif',
        user_id: '3',
        role: 'Product',
        message: 'But limited vegan options @Janet!',
        created_at: '2024-07-02T11:46:00',
    },
    {
        id: '7',
        user_name: 'Armen',
        user_id: '1',
        role: 'Engineering',
        message: 'Agreed',
        created_at: '2024-07-02T23:52:00',
    },
    {
        id: '8',
        user_name: 'Janet',
        src: '/images/img-2.jfif',
        user_id: '4',
        role: 'Engineering',
        message: 'That works- I was actually planning to get a smoothie anyways 👍',
        created_at: '2024-07-02T00:03:00',
    },
    {
        id: '9',
        user_name: 'Janet',
        src: '/images/img-1.jfif',
        user_id: '5',
        role: 'Product',
        message: 'On for 12:30 PM then ?',
        created_at: '2024-07-02T00:04:00',
    },
];

const useChat = () => {
    return {
        id: '1',
        name: '🦄 Team Unicorns',
        members: [
            {
                id: '5',
                name: 'Janet',
                src: '/images/img-1.jfif',
            },
            {
                id: '4',
                name: 'Janet',
                src: '/images/img-2.jfif',
            },
            {
                id: '3',
                name: 'Aubrey',
                src: '/images/img-3.jfif',
            },
            {
                id: '2',
                name: 'Jav',
                src: '/images/img-4.jfif',
            }
        ],
        messages: data
    }
}

export default useChat
