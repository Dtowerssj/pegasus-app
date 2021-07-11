import { Colors } from '../constants';

export default {
  
  loader: {
    marginTop: 20,
  },
  noData: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Ubuntu-Regular',
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  listItem: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    borderLeftWidth: 2,
    borderLeftColor: Colors[1],
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: Colors[4],
    borderStyle: 'solid',
    fontFamily: 'Ubuntu-Light',
    fontSize: 20,
    lineHeight: 28,
    marginBottom: 30,
    padding: 5,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 30,
  },
  switchText: {
    fontSize: 18,
    fontFamily: 'Ubuntu-Regular',
  },
};