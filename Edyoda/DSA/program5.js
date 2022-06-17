// Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.

function mjProgFive(source_stack, destination_stack, intermediate_stack, n) {

    // base conditon
    if (n <= 0) {
        return
    }

    mjProgFive(source_stack, intermediate_stack, destination_stack, n - 1)

    console.log(`Move Disk-${n} FROM ${source_stack} TO ${destination_stack}`);

    mjProgFive(intermediate_stack, destination_stack, source_stack, n - 1);
}

mjProgFive('source_stack', 'destination_stack', 'intermediate', 3)
//Sample Output
// Move Disk-1 FROM source_stack TO destination_stack
// Move Disk-2 FROM source_stack TO intermediate
// Move Disk-1 FROM destination_stack TO intermediate
// Move Disk-3 FROM source_stack TO destination_stack
// Move Disk-1 FROM intermediate TO source_stack
// Move Disk-2 FROM intermediate TO destination_stack
// Move Disk-1 FROM source_stack TO destination_stack
