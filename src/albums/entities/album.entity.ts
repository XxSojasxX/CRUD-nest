import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('albums', { schema: 'public' })
export class Album {
    @PrimaryGeneratedColumn( 'increment')
    id: string;

    @CreateDateColumn({
        name: 'create_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    })
    create_at: Date;

    @Column('varchar', {
        name: 'nombre',
        nullable: false,
        comment: 'nombre album'
    })
    nombre: string

    @Column('varchar', {
        name: 'lanzamiento',
        nullable: false,
        comment: 'fecha de lanzamiento'
    })
    lanzamiento: string

    @Column('numeric', {
        name: 'pistas',
        nullable: true,
        comment: 'numero de pistas'
    })
    pistas: number

    @Column('varchar', {
        name: 'autor',
        nullable: false,
        comment: 'autor del album'
    })
    autor: string

    @Column('varchar', {
        name: 'disquera',
        nullable: false,
        comment: 'disquera del album'
    })
    disquera: string

}
