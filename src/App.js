import React, { Component } from 'react';
import './App.css';
import { Form, Input, Menu, Layout, notification, Card, Button, InputNumber } from 'antd';
const { Header, Content } = Layout;


const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const openNotification = () => {
    const args = {
        message: 'Envio exitoso',
        description:
            'Tu información fue enviada con éxito, estaremos en contacto contigo',
        duration: 5,
    };
    notification.open(args);
};


class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
        name: '',
        email: '',
        cellphone: '',
        age: 18,
        menu: [
            {name : 'Vivair', id: 1},
            {name: 'Avianca', id: 2}
        ],
        show_option: ''
    }

  }

  render() {
    return(
        <Layout>
          <Header>
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                  {
                      this.state.menu.map((item) => <Menu.Item key={item.id} onClick={this.onItemMenuSelected.bind(this)}>{item.name}</Menu.Item>)
                  }
              </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
              <Card title="Formulario">
                  Hola, bienvenido, sabemos que quieres viajar en un {this.state.show_option}

                  <Card  style={{ marginTop: 16 }}  type="inner">
                      <div className="site-layout-content">
                          <Form
                              {...layout}  name="basic"  initialValues={{remember: true,}} >
                              <Form.Item tooltip="Este campo es requerido" value={this.state.name} onChange={this.onNameChange.bind(this)}  label="Nombre completo" name="username"
                                         rules={[
                                             {
                                                 required: true,
                                                 message: 'Por favor ingresa tu nombre',
                                             },
                                             {
                                                 pattern: new RegExp(/^[a-zA-Z@ ]+$/i),
                                                 message: 'Solo letras',
                                             }

                                         ]}>
                                  <Input/>
                              </Form.Item>

                              <Form.Item tooltip="Este campo es requerido" value={this.state.email} onChange={this.onEmailChange.bind(this)} label="Email" name="email"
                                         rules={[
                                             {
                                                 required: true,
                                                 message: 'Por favor ingresa tu email',
                                             },
                                             {
                                                 type: "email",
                                                 message: 'No es una dirección valida',
                                             },
                                         ]}>
                                  <Input />
                              </Form.Item>

                              <Form.Item tooltip="Este campo es requerido"  value={this.state.cellphone} onChange={this.onCellPhoneChange.bind(this)}  label="Celular" name="cellphone"
                                         rules={[
                                             {
                                                 required: true,
                                                 pattern: new RegExp(/^[0-9]+$/i),
                                                 message: 'Por favor ingresa tu celular',
                                             },
                                             {
                                                 pattern: new RegExp(/^[0-9]+$/i),
                                                 message: 'Solo numeros',
                                             },
                                         ]}>
                                  <Input/>
                              </Form.Item>

                              <Form.Item label="Edad" required tooltip="Este campo es requerido"
                                         rules={[
                                             {
                                                 required: true,
                                                 message: 'Campo requerido',
                                             }
                                         ]}>
                                  <InputNumber size="large" min={18} max={100} defaultValue={this.state.age} onChange={this.onAgeChange.bind(this)}/>
                              </Form.Item>

                              <Form.Item {...tailLayout}>
                                  <Button type="primary" onClick={this.handleSubmit.bind(this)}>Submit</Button>
                              </Form.Item>
                          </Form>
                      </div>
                  </Card>
              </Card>
          </Content>
        </Layout>
    );

  }

  onItemMenuSelected(event){
      const option = event.item.props.children[1];
      this.setState({show_option: option})
  }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onCellPhoneChange(event) {
        this.setState({cellphone: event.target.value})
    }

    onAgeChange(event) {
        this.setState({age: event})
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.name && this.state.email && this.state.cellphone && this.state.age) {
            openNotification();
            console.log('nombre:' +  this.state.name, '\n', 'email:' + this.state.email, '\n', 'celular:' + this.state.cellphone, '\n', 'Edad:' + this.state.age);
        }

    }



}

export default App;