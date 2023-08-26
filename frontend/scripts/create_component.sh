#!bin/bash

read -p "In which folder would you like to create the component?(page/component) " FOLDER_NAME
read -p "What is the component name? " COMPONENT_NAME

create_files() {
    mkdir ./src/App/${FOLDER_NAME}/${COMPONENT_NAME}
    mkdir ./src/App/${FOLDER_NAME}/${COMPONENT_NAME}/Media
    mkdir ./src/App/${FOLDER_NAME}/${COMPONENT_NAME}/Types
    mkdir ./src/App/${FOLDER_NAME}/${COMPONENT_NAME}/Styles
    touch ./src/App/${FOLDER_NAME}/${COMPONENT_NAME}/Styles/main.scss
    touch ./src/App/${FOLDER_NAME}/${COMPONENT_NAME}/index.tsx
}

write_in_file() {
    {
        echo "//~ Imports Modules
import './Styles/main.scss';

//~ Component
const $COMPONENT_NAME = () => {
  return (
    <section className=\"\">
    </section>
  );
}; 
export default $COMPONENT_NAME;
"
    } >./src/App/${FOLDER_NAME}/${COMPONENT_NAME}/index.tsx
}

if [[ "${FOLDER_NAME,,}" =~ ("page") ]]; then
    echo -e "Creating the component..."

    FOLDER_NAME="Pages"
    create_files ${FOLDER_NAME}
    write_in_file ${FOLDER_NAME} ${COMPONENT_NAME}

elif

    [[ "${FOLDER_NAME,,}" =~ ("component") ]]
then
    echo -e "Creating the component..."

    FOLDER_NAME="Components"
    create_files ${FOLDER_NAME}
    write_in_file ${FOLDER_NAME} ${COMPONENT_NAME}
fi
