import React from 'react';
import { Button, Space } from 'antd';
import plusIcon from '../assets/plus.png';
import commentIcon from '../assets/comment.png';
import settingIcon from '../assets/setting.png';

const data = [
    {
        id: 0,
        label: "Add column",
        icon: plusIcon,
    },
    {
        id: 1,
        label: "Insert comment",
        icon: commentIcon,
    },
    {
        id: 2,
        label: "Update column",
        icon: settingIcon,
    }
];

const ButtonComponent = () => (
    <Space style={{ padding: '36px 0 16px' }} size="small" wrap>
        {data?.map(item => (
            <Button
                key={item.id}
                style={{fontWeight: '500'}}
                icon={
                    <img
                        src={item.icon}
                        alt={item.label}
                        style={{ width: '16px', marginRight: '4px' }}
                    />
                }
            >
                {item.label}
            </Button>
        ))}
    </Space>
);

export default ButtonComponent;
