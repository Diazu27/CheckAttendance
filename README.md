# CheckAttendance

![image](https://github.com/user-attachments/assets/523baf6c-d0ef-42d8-ad47-f366dc821805)


## Description

Esta herramienta CLI (interfaz de línea de comandos) está diseñada para facilitar el envío de correos electrónicos de marcación de entrada y salida en el trabajo. Permite enviar mensajes de forma cómoda y rápida, eligiendo la opción adecuada según la acción que necesitemos registrar.


## Usage

1.  Descargar el código fuente
2.  Modificar el archivo config.js
  ```
    const UserData = {
        Name: "Juan",        // Nombre del usuario
        LastName: "Pérez",   // Apellido del usuario
        Email: "juan.perez@example.com",  // Correo electrónico del usuario
        Password: "segura123",            // Contraseña de aplicación generada desde "Seguridad" Cuenta Goolge
        ToEmail: [                       // Lista de correos electrónicos para enviar
            "amigo1@example.com",
            "amigo2@example.com",
            "trabajo@example.com"
        ]
    };

  ```
3. Ejecutar
   ```
   npm install -g checkAttendance
