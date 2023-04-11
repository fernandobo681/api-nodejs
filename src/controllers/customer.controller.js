


export const createCustomer = (req, res, next) => {

  const customer = req.body;
  const customersService = Container.get(CustomersService)
  customersService.create(customer).then(customer => {
    res.json(customer)
  }).catch(next)

}
