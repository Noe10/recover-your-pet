create table person(
    id int (10) primary key,
    nombre varchar(20) not null,
    paterno varchar(20) not null,
    materno varchar(20) not null,
    correo varchar(30) not null,
    pass varchar(30) not null,
    direccion varchar(40) not null,
    create_at timestamp default current_timestamp,
    update_at timestamp default current_timestamp
)
 create table pet(
     id int (10) primary key,
     id_person int (10),
     tipo varchar(30) not null,
     nombre varchar(30) not null,
     fec_Nac date ,
     imagen varchar(200) not null,
     create_at timestamp default current_timestamp,
     update_at timestamp default current_timestamp
 )
 create table record_lost(
     id int(10) primary key,
    fecha date not null,
    lugar varchar(100) not null,
    recompensa float() not null,
    id_pet int (10 ),
    create_at timestamp default current_timestamp,
    update_at timestamp default current_timestamp

 )
alter table pet
add constraint fk_pet_person
foreign  key (id_person) references person(id)

alter table record_lost
add constraint fk_record_pet
foreign key (id_pet) references pet(id)