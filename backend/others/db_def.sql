create table incapacity_management_core_empleado
(
    id           integer     not null auto_increment,
    nombre       varchar(50) not null,
    apellido     varchar(50) not null,
    cedula       varchar(10) not null,
    telefono     varchar(10) not null,
    departamento varchar(50) not null,
    created_at   datetime    not null,
    updated_at   datetime    not null,
    primary key (id)
);

create table incapacity_management_core_tipoentidad
(
    id         integer     not null auto_increment,
    tipo       varchar(30) not null,
    created_at datetime    not null,
    updated_at datetime    not null,
    primary key (id)
);

create table incapacity_management_core_entidadsalud
(
    id         integer     not null auto_increment,
    nombre     varchar(30) not null,
    created_at datetime    not null,
    updated_at datetime    not null,
    tipo_id    integer     not null,
    primary key (id),
    foreign key (tipo_id) references incapacity_management_core_tipoentidad (id)
);

create index incapacity_management_core_entidadsalud_tipo_id_5cde0513
    on incapacity_management_core_entidadsalud (tipo_id);

create table incapacity_management_core_tipoincapacidad
(
    id         integer     not null auto_increment,
    tipo       varchar(30) not null,
    created_at datetime    not null,
    updated_at datetime    not null,
    primary key (id)
);

create table incapacity_management_core_incapacidad
(
    id                  integer  not null auto_increment,
    fecha_inicio        date     not null,
    fecha_fin           date     not null,
    created_at          datetime not null,
    updated_at          datetime not null,
    id_empleado_id      integer  not null,
    tipo_incapacidad_id integer  not null,
    entidad_id_id       integer,
    primary key (id),
    foreign key (id_empleado_id) references incapacity_management_core_empleado (id),
    foreign key (tipo_incapacidad_id) references incapacity_management_core_tipoincapacidad (id),
    foreign key (entidad_id_id) references incapacity_management_core_entidadsalud (id)
);

create table incapacity_management_core_documento
(
    id                integer      not null auto_increment,
    archivo           varchar(100) not null,
    created_at        datetime     not null,
    updated_at        datetime     not null,
    id_incapacidad_id integer      not null,
    primary key (id),
    foreign key (id_incapacidad_id) references incapacity_management_core_incapacidad (id)
);

create index incapacity_management_core_documento_id_incapacidad_id_5001
    on incapacity_management_core_documento (id_incapacidad_id);

create index incapacity_management_core_incapacidad_entidad_id_id_5002
    on incapacity_management_core_incapacidad (entidad_id_id);

create index incapacity_management_core_incapacidad_id_empleado_id_5003
    on incapacity_management_core_incapacidad (id_empleado_id);

create index incapacity_management_core_incapacidad_tipo_incapacidad_id_5004
    on incapacity_management_core_incapacidad (tipo_incapacidad_id);

