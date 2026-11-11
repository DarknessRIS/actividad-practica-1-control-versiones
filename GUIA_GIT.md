# Guía de ejecución: Actividad Práctica 1 (AP-01) · Git y GitHub

**Actividad:** Actividad Práctica 1 (AP-01), primera actividad práctica y segunda actividad evaluativa general del Tema 1, después del Seminario 1.  
**Estudiante:** Alison Martínez Rivero · **Grupo:** IDFI202

Esta guía separa el procedimiento que exige Git local de una alternativa de publicación desde el navegador móvil. Son procedimientos relacionados, pero no equivalentes.

## A. Flujo previsto con Git local

### 1. Configurar la identidad de los commits

Ejecutar una sola vez en la computadora donde se utilizará Git:

```bash
git config --global user.name "Alison Martínez Rivero"
git config --global user.email "154399556+DarknessRIS@users.noreply.github.com"
```

El correo `noreply` evita publicar el correo personal. La identidad de autor de Git no sustituye el inicio de sesión de GitHub.

Comprobar la configuración:

```bash
git config --global --list
```

### 2. Abrir la carpeta del proyecto e inicializar Git

```bash
cd actividad-practica-1-control-versiones
git init
git status
```

`git init` inicializa el repositorio local. `git status` informa qué archivos están sin seguimiento, preparados o modificados.

### 3. Preparar y guardar la primera versión

```bash
git add index.html styles.css script.js README.md GUIA_GIT.md .gitignore
git status
git commit -m "Primer commit: proyecto web de la AP-01"
```

`git add` prepara los cambios (staging). `git commit` guarda una versión en el historial local. Un commit local todavía no aparece en GitHub.

### 4. Asociar el repositorio remoto

Repositorio remoto:

```text
https://github.com/DarknessRIS/actividad-practica-1-control-versiones.git
```

Comandos:

```bash
git branch -M main
git remote add origin https://github.com/DarknessRIS/actividad-practica-1-control-versiones.git
git remote -v
```

Si ya existe un remoto llamado `origin`, consultar primero `git remote -v` y no repetir `git remote add` a ciegas.

### 5. Enviar los commits a GitHub

```bash
git push -u origin main
```

`git push` envía los commits locales a la rama remota. Si Git solicita autenticación por HTTPS, utiliza el mecanismo oficial que indique GitHub. No introduzcas ni compartas la contraseña de la cuenta como token y nunca publiques credenciales.

### 6. Verificar el resultado

```bash
git status
git log --oneline --decorate
git remote -v
```

En GitHub, abre el repositorio y comprueba que aparecen `index.html`, `styles.css`, `script.js`, `README.md`, `GUIA_GIT.md` y `.gitignore`, y que la rama activa sea `main`.

## B. Alternativa de publicación desde Android (sin Git local)

Esta alternativa ayuda a publicar los archivos cuando no se dispone de computadora. **No sustituye** la instalación/configuración local de Git ni demuestra que se hayan ejecutado `git init`, `git add`, `git commit` y `git push` desde una computadora.

1. Descarga el ZIP del proyecto y extráelo en el teléfono.
2. Abre https://github.com/DarknessRIS/actividad-practica-1-control-versiones e inicia sesión en la cuenta correcta.
3. Selecciona **Add file → Upload files** (el texto puede variar ligeramente en la interfaz móvil).
4. Selecciona los archivos extraídos: `index.html`, `styles.css`, `script.js`, `README.md` y `GUIA_GIT.md`.
5. Incorpora también `.gitignore`. Si el selector de Android oculta archivos que comienzan por punto, activa la opción para mostrar archivos ocultos o crea `.gitignore` directamente desde la interfaz web de GitHub.
6. Usa como mensaje: `Primer commit: proyecto web de la AP-01`.
7. Confirma la operación con **Commit changes** en la rama `main`.
8. Abre la página del repositorio y verifica cada archivo. Guarda el enlace y una captura de la lista de archivos y del historial de commits.

Esta operación registra cambios directamente en el repositorio remoto. El commit remoto no prueba por sí mismo que se haya hecho un commit local ni un `git push`.

## C. Qué hace cada operación

| Operación | Dónde ocurre | Función |
|---|---|---|
| `git init` | Equipo local | Inicializa un repositorio Git local. |
| `git status` | Equipo local | Muestra el estado de los archivos. |
| `git add` | Equipo local | Prepara cambios para el próximo commit. |
| `git commit` | Equipo local | Registra una versión en el historial local. |
| `git remote add` | Configuración local | Asocia el repositorio remoto. |
| `git push` | Comunicación local-remota | Envía commits locales a GitHub. |
| Upload files / Commit changes | Web de GitHub | Carga archivos y crea un commit directamente en el repositorio remoto. |

## D. Criterios de comprobación

- La página principal se llama `index.html`.
- Los enlaces a `styles.css` y `script.js` corresponden a archivos existentes.
- Todos los archivos del proyecto están en la raíz del repositorio, salvo que la orientación docente indique otra estructura.
- La rama de entrega es `main`.
- El repositorio puede abrirse mediante su URL pública.
- No se publican contraseñas, tokens ni datos personales innecesarios.
- No se afirma que se ejecutó Git localmente si no existe evidencia de esa ejecución.
