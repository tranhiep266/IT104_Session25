import { Card, Form, Input, Button, Typography } from "antd";

export default function Ex4() {
    const [form] = Form.useForm();

    return (
        <div style={{
            minHeight: "100vh",
            display: "grid",
            placeItems: "center",
            padding: 16
        }}>
            <Card style={{ width: 420 }}>
                <Typography.Title level={3} style={{ textAlign: "center", marginBottom: 24 }}>
                    Create account
                </Typography.Title>

                <Form
                    form={form}
                    layout="vertical"
                >
                    <Form.Item
                        label="Your email"
                        name="email"
                    >
                        <Input placeholder="name@company.com" />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                    >
                        <Input.Password placeholder="••••••••" />
                    </Form.Item>

                    <Form.Item
                        label="Confirm Password"
                        name="password"
                    >
                        <Input.Password placeholder="••••••••" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" block>
                            Create an account
                        </Button>
                    </Form.Item>
                </Form>

                <Typography.Paragraph style={{ textAlign: "center", marginBottom: 0 }}>
                    Already have an account? <a href="#hehe">Login here</a>
                </Typography.Paragraph>
            </Card>
        </div>
    );
}