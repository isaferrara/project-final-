import React from 'react';
import { List, Card, Button } from 'antd';

const data = [
    {
      title: 'Basic',
      content: [
          {
              price: "U$00.00 donation",
              mentoring: "no mentoring",
              support: "no support from the community",
              jobs: "no IT jobs offers",
              email: "no important email notifications"
          }
      ]
    },
    {
        title: 'Freelancer',
        content: [
            {
                price: "U$30.00 donation",
                mentoring: "no mentoring",
                support: "yes, support from the community",
                jobs: "yes, IT jobs offers",
                email: "yes, important email notifications"
            }
        ]
      },
      {
        title: 'Junior',
        content: [
            {
                price: "U$50.00 donation",
                mentoring: "yes, mentoring",
                support: "yes, support from the community",
                jobs: "yes, IT jobs offers",
                email: "yes, important email notifications"
            }
        ]
      }
  ];

const AppPricing = () => {
    return (
        <div className="block pricingBlock bgGray">
             <div className="container-fluid">
             <div className="titleHolder">
                 <h2>Monthly Donation Plans</h2>
                 <p>make your learning education path a better live experience</p>
             </div>
             <List
            grid={{ gutter: 16, column: 3 }}
            dataSource={data}
            renderItem={item => (
            <List.Item>
                <Card title={item.title}>
                <p className="large">{item.content[0].price}</p>
                <p>{item.content[0].mentoring}</p>
                <p>{item.content[0].mentoring}</p>
                <p>{item.content[0].jobs}</p>
                <p>{item.content[0].email}</p>
                <Button type="primary" size="large"><i class="fab fa-telegram-plane"></i>&nbsp; Get started</Button>
                </Card>
            </List.Item>
            )}
        />
             </div>
            
        </div>
    );
}

export default AppPricing;
