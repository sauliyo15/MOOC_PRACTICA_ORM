<img  align="left" width="150" style="float: left;" src="https://www.upm.es/sfs/Rectorado/Gabinete%20del%20Rector/Logos/UPM/CEI/LOGOTIPO%20leyenda%20color%20JPG%20p.png">
<img  align="right" width="60" style="float: right;" src="http://www.dit.upm.es/figures/logos/ditupm-big.gif">


<br/><br/>


# Practica BBDD - Sequelize ORM

## 1. Objetivo

- Desarrollar las 4 operaciones CRUD (Create, Read, Update and Delete) a través de un ORM
- Practicar con un ORM para realizar queries
- Afianzar las ventajas de usar ORMs en el desarrollo de aplicaciones

## 2. Dependencias

Para realizar la práctica el alumno deberá tener instalado en su ordenador:
- Herramienta GIT para gestión de repositorios [Github](https://git-scm.com/downloads)
- Entorno de ejecución de javascript [NodeJS](https://nodejs.org/es/download/)
- Base de datos MySQL [MySQL](https://dev.mysql.com/downloads/)

## 3. Descripción de la práctica

La práctica simula una aplicación de gestión de pacientes basada en el patron MVC (Modelo-Vista-Controlador) utilizando Sequelize como ORM para NodeJS para poder almacenar los datos de la aplicación en MySQL.

La **vista** es una interfaz web basada en HTML y CSS que permite realizar diversas acciones sobre los pacientes como crear, editar, buscar, filtrar, listar o eliminar. La vista esta incluida ya en el codigo descargado.

El **modelo** es la representación de la información de los pacientes. En esta apliación se van a usar tres modelos: doctor, hospital y patient. Un ejemplo de como están definidos los modelos en esta práctica es el siguiente:

```
const Patient = sequelize.define(
    'Patient',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING()
      },
      surname: {
        type: DataTypes.STRING()
      },
      dni: {
        type: DataTypes.STRING()
      }
    },
    {
      tableName: 'patient',
      timestamps: true,
      underscored: true,
    }
  );
```

El **controlador** ejecuta acciones sobre los modelos. El alumno deberá desarrollar el controlador para que las acciones que se realicen a través de la página web funcionen correctamente. Para ello, desarrollara las operaciones correspondientes con Sequelize implementando las operaciones CRUD sobre los objetos patiente, hospital y doctor, así como otra serie de queries.

En el siguiente video puede observar cual sería el funcionamiento normal de la aplicación [link](https://youtu.be/8xXaFCRxMXE)

## 4. Descargar e instalar el código del proyecto

Abra un terminal en su ordenador y siga los siguientes pasos.

El proyecto debe clonarse en el ordenador desde el que se está trabajando con:

```
$ git clone https://github.com/BBDD-ETSIT/MOOC_PRACTICA_ORM
```

y entrar en el directorio de trabajo

```
$ cd MOOC_PRACTICA_ORM
```

Una vez dentro de la carpeta, se instalan las dependencias con:

```
$ npm install
```

A continuación deben configurarse los datos de acceso a MySQL mediante las variables de entorno:

```
[LINUX/MAC] $ export MYSQL_USER="<username>";
[LINUX/MAC] $ export MYSQL_PASS="<password>";

[WINDOWS] > set MYSQL_USER="<username>";
[WINDOWS] > set MYSQL_PASS="<password>";
```

Teniendo arrancado MySQL, creamos la base de datos con:

```
$ npm run create_db

* Si en Windows no funciona se puede probar a ejecutar lo siguiente en el terminal:
$ .\node_modules\.bin\sequelize db:create
```

Ejecutamos las migraciones para que se creen las tablas en la Base de Datos creada previamente:

```
$ npm run migrate_db

* Si en Windows no funciona se puede probar a ejecutar lo siguiente en el terminal:
$ .\node_modules\.bin\sequelize db:migrate
```

Ejecutamos los seeders para añadir una serie hospitales, pacientes y medicos por defecto a la base de datos:

```
$ npm run seed_db

* Si en Windows no funciona se puede probar a ejecutar lo siguiente en el terminal:
$ .\node_modules\.bin\sequelize db:seed:all
```

Por último podemos arrancar la práctica con:

```
$ npm start
```

Abra un navegador y vaya a la url "http://localhost:8001" para ver la aplicación de gestión de pacientes.

**NOTA: Cada vez que se quiera realizar una prueba del código desarrollado, debemos parar y arrancar de nuevo la practica. Para ello, desde el terminal pulse ctrl+c para parar y arranque de nuevo con npm start**

**NOTA2: Si ha modificado alguna tabla de manera indeseada y se quiere volver a restablecer los valores por defecto, se puede ejecutar "npm run drop_db" para borrar la Base de Datos. Puede volver a crear, migrar y poblar la base de datos de nuevo con los comandos expuestos anteriormente**

## 5. Tareas a realizar

El alumno deberá editar dos ficheros:

- controllers/controller.js. Se le provee un esqueleto con todos los funciones que deberá rellenar. En cada uno de estas funciones se deberá hacer uso del ORM Sequelize para realizar operaciones con la base de datos y devolver un resultado de la operación.

- models/models.js. A parte, deberá editar este fichero, en el espacio habilitado para ello, para añadir asociaciones entre los modelos que se encuentran dentro de la carpetal models:
    - Relacion 1:N entre Hospital y Paciente
    - Relacion N:M entre Paciente y Doctor


**NOTA: recuerde que las peticiones a las bases de datos son asíncronas por ello los métodos que ejecutan deben ser asincronos (como puede observar en la cabecera de los mismos) y por tanto las operaciones con Sequelize deben ir precedidas del termino await. Por ejemplo, "var pacientes = await Paciente.findAll()" guardaría en la variable "pacientes" el resultado de ejecutar la operación "findAll()"" del modelo Paciente definido con Sequelize**

En cuanto a las funciones que debe editar en controller.js debe hacer lo siguiente:

### list_hospitals()

**Descipcion:**
- Busca en la base de datos todos los hospitales existentes en la coleccion "Hospital"

**Parametros:**

- Ninguno

**Returns:**

- Un array de objetos de hospitales

### filterHospitalsByCity(city)

**Descipcion:**
- Busca en la colección "Hospital" filtrando por ciudad

**Parametros:**

- city - ciudad a buscar

**Returns:**

- Un array de objetos de hospitales

### list_hospital_patients(hospital_id)

**Descipcion:**
- Busca todos los pacientes correspondientes a un hospital

**Parametros:**

- hospital_id - Ide del hospital

**Returns:**

- Un array de objetos de pacientes

### read(patient_id)

**Descipcion:**
- Busca los datos de un paciente

**Parametros:**

- patient_id - Id del paciente a actualizar

**Returns:**

- Un objeto paciente

### create(hospital_id, name, surname, dni)

**Descipcion:**
- Crea un paciente dentro de un hospital

**Parametros:**

- hospital_id - Id del hospital
- name - Nombre del paciente
- surname - Apellido del paciente 
- dni - DNI del paciente

**Returns:**

- El objeto paciente creado

### update(patient_id, name, surname, dni)

**Descipcion:**
- Actualiza los datos del paciente identificado por patient_id

**Parametros:**

- patient_id - Id del paciente
- name - Nombre del paciente
- surname - Apellido del paciente 
- dni - DNI del paciente

**Returns:**

- El objeto paciente actualizado

### delete(patient_id)

**Descipcion:**
- Borra un paciente de la base de datos

**Parametros:**

- patient_id - Id del paciente

**Returns:**

- El resultado de la operación de borrado

### assignDoctor(patient_id, doctor_id)

**Descipcion:**
- Asigna un medico a un paciente en la base de datos.

**Parametros:**

- patient_id - Id del paciente
- hospital_id - Id del hospital

**Returns:**

- Devuelve los datos del paciente al que se le ha asignado el medico

### showPatientDoctors(patient_id)

**Descipcion:**
- Devuelve los doctores que estan asignados a un paciente.

**Parametros:**

- patient_id - Id del paciente

**Returns:**

- Un array de objetos de doctores 


## 6. Prueba de la práctica 

Para ayudar al desarrollo, se provee una herramienta de autocorrección que prueba las distintas funcionalidades que se piden en el enunciado.

La herramienta de autocorrección preguntará por el correo del alumno y el token de Moodle. En el enlace [https://www.npmjs.com/package/autocorector](https://www.npmjs.com/package/autocorector) se proveen instrucciones para encontrar dicho token.

Para instalar y hacer uso de la [herramienta de autocorrección](https://www.npmjs.com/package/autocorector) en el ordenador local, ejecuta los siguientes comandos en el directorio del proyecto:

```
$ npx autocorector
```

Se puede pasar la herramienta autocorector tantas veces como se desee sin ninguna repercusión en la calificación.

## 7. Instrucciones para la Entrega y Evaluación.

Una vez satisfecho con su calificación, el alumno puede subir su entrega a Moodle con el siguiente comando:
```
$ npx autocorector --upload
```

El alumno podrá subir al Moodle la entrega tantas veces como desee pero se quedará registrada solo la última subida.

**RÚBRICA**: Cada método que se pide resolver de la practica se puntuara de la siguiente manera:
-  **1 punto por cada uno de las siguientes funciones realizadas:**  list_hospitals, filterHospitalsByCity, list_hospital_patients, read, create, update y delete
-  **1,5 puntos por cada uno de las siguientes funciones realizadas:**  assignDoctor y showPatientDoctors 

Si pasa todos los tests se dará la máxima puntuación. 
